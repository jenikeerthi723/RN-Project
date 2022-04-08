import React, { Component } from "react";
import { View, Text } from "react-native";

class Red extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}> R </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    width: 100,
    height: 220,
    backgroundColor: "red",
  },
  textContainer: {
    fontSize: 36,
    fontWeight: "100",
    marginBottom: 24,
  },
};

export default Red;
