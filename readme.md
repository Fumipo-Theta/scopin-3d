# SCOPin rock 3D model objects

Released app: https://3d-rocks.fumipo-theta.com/index.html

## Prepare 3D model

Metashapeを用いて3Dモデルを作成する。

### Note for exporting a compatible model

- モデルエクスポート時に, モデルを座標の中心に置くこと
- モデル > プリセットビュー > 上 の視点を選んだときにサンプルの正面が見えるよう回転させること
- `index.obj`, `index.mtl`, `index.jpg` (テクスチャ) をエクスポートすること
  - テクスチャの精密性は`10`など高い値を指定したほうが見た目が良い

## Prepare HTML and put a model

- モデルの名前を決める(ex. `rhyolite`)
- トップレベルの[`index.html`](index.html)にリンクを追加する(<`a href="/models/rhyolite/index.html">rhyolite</a>`)
- [`models/`]("/models")ディレクトリにサブディレクトリ`models/rhyolite/`を配置
  - HTMLファイル(`models/rhyolite/index.html`: [`index.template.html`](index.template.html)をもとに作成)と3Dモデルのアセット(`index.obj`, `index.mtl`, `index.jpg`)を設置
- `models/rhyolite/index.html`を編集してパラメータを調整

## Local development

### Local server

- `npm start`: then access to [http://localhost:8090/index.html](http://localhost:8090/index.html)

## Publish models

- AWS S3を用いて静的配信する
- 前段にCloudfrontを設置しておく
