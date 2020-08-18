# my portfolio site

<br>

コーディングの見本も兼ねて、ポートフォリオサイトを制作しました。<br>
以前に制作したもののリストもリンクとして用意しています。<br>

目を通していただければ幸いです。

<br>

## URL
  :link: [https://ymdma--portfolio.web.app/](https://ymdma--portfolio.web.app/)

<br>

## 制作環境

- macOS Mojave
- メインブラウザはchrome
- VSCode
- Pug,Sass,JavaScript,JSON(データ置きとして),webpack4,globule,babel
- adobe XD,Photoshop

<br>

## 動作確認済み

  ### mac ( macOSX Mojave )
  - chrome
  - firefox
  - safari
  ### mobile ( iphone8 )
  - chrome
  - firefox
  - safari
  ### windows ( 10 )
  - chrome
  - firefox
  - edge

  <br>

## 動作対象外

  ###  windows10
  - InternetExplorer

      InternetExplorerは正常に動作しませんので、IE以外のブラウザでアクセスしてください。<br>
      （メッセージが出ます。）

<br>

## 制作日数

- 基本は数日<br>
  （細かい修正は継続して行っています。）<br>

（どういうデザインにするかだったり、何をどう作るかを考えるのに一番時間がかかりました。）

<br>

## このページの仕組み

メンテナンスの容易さを考え、
HTMLファイルには骨組みのみ記述し、コンテンツの具体的な内容を書かず、肉付けの部分のHTMLはJavaScriptから生成するスタイルを目指しました。

その為に、JavaScript内で Person クラスを定義し、そのインスタンスとして Yamada オブジェクトを用意しました。

そのYamadaオブジェクトの記述内容から、自己紹介文、技術一覧、そのコメント、制作物リストを生成しています。

また、参照するデータ（技術のリストなど）は、DBのテーブルではなく、JSONファイルに記述しました。

<br>

## 工夫・反省

### 工夫点

○ 再利用性とメンテナンスや細かい内容変更の容易さを目指す
- 内容更新の際、一つのオブジェクトの内容を書き換えることで済ませることができることを目指しました。
- 他の人物のインスタンスを作成し適用するオブジェクトを入れ替えるだけで、ほぼそのまま他の人のサイトとすることも可能とすることを目指しました。

### 反省点
● 実際少し書き換えなければならない
- インスタンスを入れ替えるだけで他の人のサイトに書き換えられることを目指しましたが、現状では、コードを書き換えないとできません。<br>
  考え（設計）をより整理することがこれを達成するのに必要だと考えています。<br>
  より仕組みを整理し、よりシンプルなコードを書けるよう努力したいと思います。

<br>

## 今後の展望

- IEでの動作について<br>
  → なぜ正常に動作しないのかの原因をより具体的につきとめたいと考えています。

- （できれば）リーダー対応<br>
  → 今回に関しては必要と考えてはいませんが、現状「データが見つかりません」のみの表示になってしまうので、基本的なサイト情報程度反映できるようにしたい。
