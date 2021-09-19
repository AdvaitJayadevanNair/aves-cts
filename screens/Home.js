import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Platform,
  Button,
  Alert,
  SafeAreaView,
  Image
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import TopBar from '../components/TopBar';

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#166837'
      }}
    >
      <View
        style={{
          flex: 1,
          paddingLeft: 33,
          paddingRight: 33,
          backgroundColor: '#166837',
          alignItems: 'center'
        }}
      >
        <TopBar ending="menu" endingOnClick={() => navigation.navigate("Menu")} />
        <Image
          style={{
            marginTop: 15,
            width: 200,
            height: 200,
            borderRadius: 100,
            borderColor: '#ffee00',
            borderWidth: 2
          }}
          source={{ uri: 'https://picsum.photos/200/200?1' }}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          Advait Jayadevan Nair
        </Text>
        <Text
          style={{
            color: '#ffee00',
            fontSize: 15
          }}
        >
          Admin, Junior, Synnlab
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 26
          }}
        >
          Synlab
        </Text>
        <Text
          style={{
            marginBottom: 15,
            fontWeight: 'bold',
            color: '#ffee00',
            fontSize: 15
          }}
        >
          @11:05am
        </Text>
        <View style={{
          width: 300,
          height: 300,
          borderRadius: 20,
          borderColor: "#ffee00",
          borderStyle: "solid",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2
          }}>
          <QRCode size={280} value="http://awesome.link.qr" color="#ffee00" backgroundColor="#166837" />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffee00',
            borderRadius: 12,
            width: 300,
            height: 60,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowOpacity: 0.19,
            shadowRadius: 4,
            elevation: 6
          }}
        >
          <Text
            style={{
              color: '#166837',
              fontWeight: 'bold',
              fontSize: 17
            }}
          >
            Scan
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
