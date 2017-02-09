/**
 * 独自定義したモジュール(部品)に関する定義
 *
 * 流れとしては下記の通りになる。
 * 1. React及びReactNativeクラスのインポートをする
 * 2. Componentクラスを継承したクラス名(DayItem)を定義して、コンポーネントの定義とスタイル定義を行う
 * 3. module.export = DayItem;としてモジュール化をする
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class DayItem extends Component {
  //コンポーネント要素のレンダリング (Dynamic Stylingも含む)
  //{this.props.day}で表示側の属性定義から渡された値を表示する
  render() {
    return (
      <Text style={this.setStyleDayItemComponents()}>
        {this.props.day}
      </Text>
    );
  }
  //定義したコンポーネントに関するスタイル設定用のメソッド
  setStyleDayItemComponents() {
    return {
      color: this.setColor(),
      fontWeight: this.setFontWeight(),
      fontSize: this.setFontSize(),
      lineHeight: this.setLineHeight()
    }
  }
  //文字色の設定
  setColor() {
    var opacity = 1 / (this.props.daysUntil + 1);
    return 'rgba(0, 0, 0, ' + opacity + ')';
  }
  //フォント重みの設定
  setFontWeight() {
    var weight = 7 - this.props.daysUntil;
    return weight * 100 + '';
  }
  //フォントサイズの設定
  setFontSize() {
    return 60 - 6 * this.props.daysUntil;
  }
  //文字高さの設定
  setLineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}

//スタイル定義 (Staticに記す場合の書き方)
/*
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF',
  }
});
*/

//何処でも使用できるようにモジュール(部品)にする
module.export = DayItem;
