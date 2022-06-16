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

- モデルのid (ex. `model-0`) やラベルを決める
- [src/js/rock-list.json](src/js/rock-list.json)にモデル情報を追記する
  - トップページのモデル一覧に表示するため
- [`models/`]("/models")ディレクトリにサブディレクトリ`models/model-0/`を配置
  - 3Dモデルのアセット(`index.obj`, `index.mtl`, `index.jpg`)とサムネイル画像(`thumbnail.jpg`)を設置

## Local development

### Local server

- `npm start`: then access to [http://localhost:8090/index.html](http://localhost:8090/index.html)

## Publish models

- AWS S3を用いて静的配信する
- 前段にCloudfrontを設置しておく
