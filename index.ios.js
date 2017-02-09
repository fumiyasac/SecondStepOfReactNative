/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//独自コンポーネントのインポート宣言
import DayItem from './ios-modules/day-item'

//パッケージのインポート宣言をする(※ npmパッケージを使用する)
//(コマンド) $ npm install --save moment
//(参考リンク) https://medium.com/@ozluy/momentjs-react-es6-datetime-format-524d900143db#.8gwrwwo0b
import Moment from 'moment'

//表示したい要素を格納した配列(※ Moment経由で取得するのでコメントアウト)
//var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class MakeLayoutOfReactNative extends Component {
  //コンポーネント要素のレンダリング
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native!
        </Text>
        <Text>
          Current: {Moment().format('dddd')}
        </Text>
        {this.makeDaysList()}
      </View>
    );
  }
  //独自定義コンポーネント「DayItem」に値を引き渡した状態にする
  //※(注意)keyを指定しないままだと一意性に関する？警告がでてしまうので、「DayItem」にkey属性をつけてindex値を設定しておく
  makeDaysList() {
    var dayItemsList = [];
    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      dayItemsList.push(
        <DayItem key={i} day={day} daysUntil={i} />
      );
    }
    return dayItemsList;
  }
}

//スタイル定義
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('MakeLayoutOfReactNative', () => MakeLayoutOfReactNative);
