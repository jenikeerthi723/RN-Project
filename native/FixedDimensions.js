import React, { Component } from 'react';
import { View } from 'react-native';

function FixedDimensions() {
    return (
      <View style={{margin: 50}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
}

export default FixedDimensions