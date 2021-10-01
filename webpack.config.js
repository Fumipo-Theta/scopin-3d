const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const version = process.env.npm_package_version;

module.exports = (process_env, argv) => {
    const compileMode = argv.env.COMPILE_ENV == "prod" ? "production" : "development"
    const outputPath = `${__dirname}/release`

    const conf_main = {
        entry: `${__dirname}/src/js/index.tsx`,
        output: {
            path: `${outputPath}/js/`,
            filename: "app.js",
        },

        mode: compileMode,

        plugins: [
            new HtmlWebpackPlugin({
                "template": `${__dirname}/src/html/index.html`,
                "filename": `${outputPath}/index.html`,
            }),

            new HtmlReplaceWebpackPlugin({
                pattern: '@VERSION@',
                replacement: version,
            }),

            new CopyPlugin({
                patterns: [
                    { from: `${__dirname}/src/root`, to: outputPath + "/" },
                    { from: `${__dirname}/src/css`, to: outputPath + "/css" },
                    { from: `${__dirname}/src/images`, to: outputPath + "/images" },
                    // { from: `${__dirname}/src/js/lib`, to: outputPath + "/js/lib" },
                ]
            })
        ],
        devServer: {
            compress: true,
            port: 8080,
            static: [{
                directory: `${__dirname}`,
                publicPath: "/"
            }],
            liveReload: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts|jsx|tsx)$/,
                    use: 'ts-loader'
                },
                {
                    test: /module\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: { url: false, modules: true }
                        }
                    ]
                },
            ]
        },
        resolve: {
            alias: { '@src': path.resolve(__dirname, 'src/') },
            extensions: [".ts", ".tsx", ".js", ".json", ".svg", ".css"]
        },
        target: "web"
    }

    if (compileMode != "production") {
        conf_main.devtool = 'eval-source-map'
    }
    return [conf_main]
}
