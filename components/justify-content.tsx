import React from "react";
import { View, StyleSheet } from "react-native";

const JustifyContentBasics = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </View>
  );
};

export default JustifyContentBasics;

const styles = StyleSheet.create({
  /*
    JUSTIFY CONTENT — controls spacing on the MAIN axis (row = horizontal, column = vertical)

    flex-start      → items start at the beginning (left in row, top in column)
    flex-end        → items move to the end (right in row, bottom in column)
    center          → items grouped and centered
    space-between   → first at start, last at end, equal space BETWEEN items
    space-around    → equal space AROUND items (edges get half space)
    space-evenly    → equal space BETWEEN items AND edges (perfectly balanced)
    default is flex-start
  */

  container: {
    flex: 1,
    flexDirection: "row",   // change to "column" to see vertical behavior

    // justifyContent: "flex-start",
    // justifyContent: "flex-end",
    // justifyContent: "center",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    // justifyContent: "space-evenly",

    padding: 20,
    backgroundColor: "aliceblue",
  },

  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
