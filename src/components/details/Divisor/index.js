//@flow
import React from 'react';
import { View, Text } from 'react-native';

const Divisor = ({ title, background }) => (
  <View
    style={{
      width: '100%',
      height: 30,
      backgroundColor: background,
      justifyContent: 'center',
      paddingLeft: 10
    }}
  >
    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto' }}>
      {title}
    </Text>
  </View>
);

export default Divisor;
