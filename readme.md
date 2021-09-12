# SCOPin rock 3D model objects

## Prepare

### Note for exporting a compatible model

- モデルエクスポート時に, モデルを座標の中心に置くこと
- モデル > プリセットビュー > 上 の視点を選んだときにサンプルの正面が見えるよう回転させること
- `.obj`, `.mtl`, `.jpg` (テクスチャ) をエクスポートすること
  - テクスチャの精密性は`10`など高い値を指定したほうが見た目が良い

## Prepare HTML and put a model

- モデルの名前を決める(ex. `rhyolite`)
- トップレベルの[`index.html`](index.html)にリンクを追加する(<`a href="/models/rhyolite/index.html">rhyolite</a>`)
- [`models/`]("/models")ディレクトリにサブディレクトリ`models/rhyolite/`を配置
  - HTMLファイル(`models/rhyolite/index.html`: [`index.template.html`](index.template.html)をもとに作成)と3Dモデルのアセット(`.obj`, `.mtl`, `.jpg`)を設置
- `models/rhyolite/index.html`を編集してパラメータを調整

## Local development

### Requirements

- python (TODO: use webpack-dev-server)

### Local server

- `npm start`: then access to [http://localhost:8000](http://localhost:8000)

## Publish models

- AWS S3を用いて静的配信する
- 前段にCloudfrontを設置しておく
