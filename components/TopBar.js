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
import { MaterialIcons } from '@expo/vector-icons';

export default function TopBar({ leading, leadingOnClick, title, ending, endingOnClick }) {
  return (
    <View
      style={{
        width: '100%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'blue'
      }}
    >
      {leading && (
        <TouchableOpacity onPress={leadingOnClick}>
          <MaterialIcons name={leading} size={36} color="#ffee00" />
        </TouchableOpacity>
      )}
      {!leading && <MaterialIcons name="360" size={36} color="#166837" />}
      <Text
        style={{
          fontWeight: '500',
          color: '#ffee00',
          fontSize: 32
        }}
      >
        {title}
      </Text>
      {ending && (
        <TouchableOpacity onPress={endingOnClick}>
          <MaterialIcons name={ending} size={36} color="#ffee00" />
        </TouchableOpacity>
      )}
      {!ending && <MaterialIcons name="360" size={36} color="#166837" />}
    </View>
  );
}
