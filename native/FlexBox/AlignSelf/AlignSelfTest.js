import React, { Component } from "react";
import { View, Text } from "react-native";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";


class AlignSelfTest extends Component {
  render() {
    return (
      // alignSelf : flex-start , center , flex-end , stretch , baseline
      <View style={styles.container}>
        <Text style={styles.headerStyle}>alignSelf Test</Text>
        <View style={styles.elementsContainer}>
          <Red />
          <Blue />
          <Green />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1,
  },
  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 24,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#7f8c8d",
    margin: 20,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default AlignSelfTest;
