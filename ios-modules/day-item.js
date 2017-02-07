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
  //コンポーネント要素のレンダリング
  //{this.props.day}で表示側の属性定義から渡された値を表示する
  render() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    );
  }
}

//スタイル定義
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF',
  }
});

//何処でも使用できるようにモジュール(部品)にする
module.export = DayItem;
