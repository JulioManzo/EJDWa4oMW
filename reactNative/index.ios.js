'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var reactNative = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar2]}>
                	My Cool App 2
                </Text>
            </View>
            <View style={[styles.view3]}>
                <MapView
                	latitude={undefined} longitude={undefined} latitudeDelta={undefined} longitudeDelta={undefined}
                	style={[styles.view3Mapview4]}>
                </MapView>
            </View>
            <View style={[styles.view5]}>
                <SliderIOS 
                	style={[styles.view5Sliderios7]}>
                </SliderIOS>
                <SwitchIOS 
                	style={[styles.view5Switchios6]}>
                </SwitchIOS>
            </View>
            <View style={[styles.view8]}>
                <ScrollView 
                dataSource={['http://www.viralnovelty.net/wp-content/uploads/2014/07/121.jpg', 'http://imgscenter.com/images/2014/09/13/Beauty-of-nature-random-4884759-1280-800.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShVpqAWrvxn8f2-XGo0ES0XP555GrVnU83y4v5kxBg8wOK9m1E']}
                style={[styles.view8Scrollview9]}>
                </ScrollView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view1Navbar2:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          width: 375,
          height: NaN,
      }, 
      view3:{
      }, 
      view3Mapview4:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
      view5:{
          flexDirection: 'row',
      }, 
      view5Switchios6:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view5Sliderios7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view8:{
      }, 
      view8Scrollview9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
})

AppRegistry.registerComponent('reactNative', () => reactNative);

