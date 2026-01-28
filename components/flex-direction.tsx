import React from "react";
import { StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",   // change to "row" manually
    //  flexDirection: "row",   // change to "row" manually
    //   flexDirection: "row-reverse",   // change to "row" manually
    //    flexDirection: "column-reverse",   // change to "row" manually

    padding: 20,
  },
  box1: {
    flex: 1,
    backgroundColor: "red",
  },
  box2: {
    flex: 2,
    backgroundColor: "darkorange",
  },
  box3: {
    flex: 3,
    backgroundColor: "green",
  },
});
