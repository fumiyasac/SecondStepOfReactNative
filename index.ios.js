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

//表示したい要素を格納した配列
var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class MakeLayoutOfReactNative extends Component {
  //コンポーネント要素のレンダリング
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native!
        </Text>
        {this.days()}
      </View>
    );
  }
  //独自定義コンポーネント「DayItem」に値を引き渡した状態にする
  //※(注意)keyを指定しないままだと一意性に関する？警告がでてしまうので、「DayItem」にkey属性をつけてindex値を設定しておく
  days() {
    days = DAYS.map(function(day, index){
      return <DayItem key={index} day={day} />
    });
    return days;
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
