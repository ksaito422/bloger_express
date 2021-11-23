# 目的

- node.js
- ReactNative
- TypeScript

上記の学習用リポジトリ

# 環境構築

- 起動

  `make up`

- 停止

  `make stop`

その他は Makefile 参照

# ディレクトリ構成

### docker

dockerfile など

### docs

ドキュメント類

- openapi
- ER 図

### work

作業ディレクトリ

- api

  api などのバックエンド

- app

  ネイティブアプリ

### アーキテクチャ

#### api

- **test**

  - テストコードの置き場

- config

  - 環境変数等

- exceptions

  - 例外処理のロジック

- interfaces

  - controller

    - リクエストを受けて、レスポンスを返すだけ（ロジックは書かない）

  - models

    - 共通のビジネスロジックなどを書く

  - repositories
    - データベースの通信を行う場所（主に CRUD を行う）

- routes
  - ルーティングのみ
