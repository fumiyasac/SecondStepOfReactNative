# [ING] - ReactNativeでの基本的なサンプル制作

### 教材としているもの

下記の動画を参考に作成しています（動画内で紹介されているサンプルコードと異なる部分がありますのでご注意下さい）

+ [React Native Tutorial - Build Apps With React Native](https://www.youtube.com/playlist?list=PLPEXdvrIYLsyFc1EVVr_YVtxU9icYfaWs)

### 補足資料. 基本事項のおさらい資料

一番最初にReactそのものの概念を理解する際に参考になったもの全般のアーカイブ

### はじめに: ざっくりと基本的な操作やお作法を理解する

+ [0から始めるjs未経験者向けReact Native入門](http://qiita.com/naodroid/items/dcd3e7eb8454d5ae9a54)

#### その1: Props & Stateに関する資料

+ [ReactにおけるStateとProps の違い](http://qiita.com/kyrieleison/items/78b3295ff3f37969ab50)
+ [今からはじめるReact.js 〜propsとstate、それからrefs〜](http://qiita.com/kuniken/items/a22adda392ccc30011b1)
+ [React超入門。propsとstateの動きを理解するコード](http://qiita.com/M-ISO/items/6c8b97a9447ccfe9a1f6)
http://post.simplie.jp/posts/69

個人的に一番しっくりきた例：PropsとStateの相互関係や仮想DOMでの表示のされ方のイメージ

+ [props(プロパティ)とstate(状態)の違い](http://javascript-demo.w3c.tokyo/js/continuation/901)
+ [【Reactのstateとpropsの違いが知りたい！(変更・更新の仕方等デモあり)】過去のReact初心者の自分にpropsとstateの違いを説明する](http://kenjimorita.jp/imadakarawakattareact/)

```
class ParentComponent extends React.Component {

  //コンストラクタ
  constructor(props){
    super(this.props)
    this.state = {
      name: "わたし"
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  //state変更用のメソッド
  onChangeName(){
    const name = this.state.name === "あなた" ? "わたし" : "あなた";
    this.setState({
      name : name
    });
  }

  //仮想DOMのレンダリング用のメソッド
  render(){
    return (
      <div>
        <h1>親Componentです</h1>
        //click押下で親で管理しているthis.state.name値が変わり子コンポーネントが再描画され、子が参照しているthis.props.nameが変わります
        <ChildComponent name={this.state.name}></ChildComponent>
        <a onClick={this.onChangeName}>click</a>
      </div>
    );
  }

}

class ChildComponent extends React.Component {

  //コンストラクタ
  constructor(props){
    super(this.props)
  }

  //仮想DOMのレンダリング用のメソッド
  render(){
    return (
      <div>
        <h2>題名(子Componentです)</h2>
        {this.props.name}の未来
      </div>
    );
  }

}

React.render(<ParentComponent />, document.getElementById('container'));
```

引用元ソース：https://gist.github.com/kenmori/acf54c6e0ebba1a55ad9a0f8a33c9aa0

### その2: Flexboxに関する資料

ReactNativeでレイアウトを構成して行く際にはFlexboxを活用してレイアウトやスタイルを組み立てて行くので概念やリファレンスに関するメモを下記に記しておきます。
※ StyleSheetの適用に関してはCSS3の記載方法に近い形（ReactNativeではキャメルケースになるので注意）

#### Flexboxの動きに関する解説

+ [ReactNativeのFlexboxレイアウト](http://minotaur.badwitch.io/reactnative-flexbox/)

#### Flexboxの挙動に関する解説

+ [React Nativeのデザイン - Stylesheet/Flexbox (part1)](http://qiita.com/shohey1226/items/5185fcba7381bf4da2f2)
+ [React Nativeのデザイン - Stylesheet/Flexbox (part2)](http://qiita.com/shohey1226/items/f413c65b7f110dcb955c)

#### Flexboxのリファレンス

+ [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
