# sandbox-rndb

React Native で Firebase Realtime Database を試した。

## 要件

- 「追加」を押下で +1 した結果を表示する
- データは [Firebase Realtime Database](https://firebase.google.com/docs/database/?hl=ja) に保存する
- リロード時には Firebase Realtime Database に保存している値を表示する
- オフライン対応している

## テクノロジースタック

- [React Native](https://facebook.github.io/react-native/)
- [create-react-native-app](https://github.com/react-community/create-react-native-app)
- [NativeBase](https://nativebase.io/)
- [Yarn](https://yarnpkg.com/lang/en/)

詳細は、yarn.lock に記載されています。

## セットアップ

```
npm install --global yarn
yarn install
```

## 開発を進める

以下のコマンドを実行して、iOS シミュレータや実機を使って、意図した方法で開発を進めて下さい。

```
yarn start
```

## コミットメッセージのフォーマット

一行のコミットメッセージは「種別」と「サブジェクト」からなります。
複数行のコミットメッセージは「種別」と「サブジェクト」と「ボディ」からなります。

```
<種別>: <サブジェクト>
<空行>
<ボディ>
```

種別は以下のどれかです。

* **feat**: A new feature
* **fix**: A bug fix
* **workaround**: A workaround
* **doc**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## 注意

- 本来は [firebase の設定](https://github.com/mori-dev/sandbox-rndb/blob/master/firebase.js#L4...L9)は github の public リポジトリで公開すべきではないです。今回の Firebase プロジェクトは削除済みです。

## レファレンス

- https://firebase.google.com/docs/ios/setup
