# react-x-ts-study-v2

- Type Script advance study
- 型定義の共通化
  - optional な型の宣言
  - 引数でのデフォルト値の設定
- props で定義された型のうち、一部の項目だけ利用する
  - Pick<type-name, "properties1" | "properties2" ..>
- props で定義された型のうち、一部の項目だけ除外する
  - Omit<type-name, "properties1" | "properties2" ..>
- fucntional component の型定義(FC/VFC)
  - react version 17 と 18 で FC の children の扱いが変わる
  - react version 17 では VFC を利用することで 18 と同様の挙動ができる。
- オプショナルチェイニング
  - optional 項目を安全に扱えるようにする
  - https://ja.javascript.info/optional-chaining
