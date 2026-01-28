import React from "react";
import { View, StyleSheet } from "react-native";

const AlignContentLayout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "orangered" }]} />
      <View style={[styles.box, { backgroundColor: "orange" }]} />
      <View style={[styles.box, { backgroundColor: "mediumseagreen" }]} />
      <View style={[styles.box, { backgroundColor: "deepskyblue" }]} />
      <View style={[styles.box, { backgroundColor: "mediumturquoise" }]} />
      <View style={[styles.box, { backgroundColor: "mediumslateblue" }]} />
      <View style={[styles.box, { backgroundColor: "purple" }]} />
    </View>
  );
};

export default AlignContentLayout;

const styles = StyleSheet.create({
  /*
    ALIGN CONTENT — controls how MULTIPLE LINES are spaced on the CROSS axis

    ✅ Works only when:
      - flexWrap: "wrap"
      - items actually wrap into 2+ lines
      - container has extra space on the cross axis (ex: height/maxHeight)

    flex-start     → all lines packed at the start (top in row-wrap)
    flex-end       → all lines packed at the end (bottom in row-wrap)
    center         → all lines grouped and centered
    stretch        → lines stretch to fill the available cross-axis space
    space-between  → first line at start, last at end, equal space BETWEEN lines
    space-around   → equal space AROUND each line (edges get half space)
  */

  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",

    //alignContent: "flex-start",
    // alignContent: "flex-end",
    // alignContent: "center",
    // alignContent: "stretch",
    // alignContent: "space-between",
    // alignContent: "space-around",

    backgroundColor: "aliceblue",
    maxHeight: 400, // gives extra vertical space so alignContent is visible
    padding: 10,
  },

  box: {
    width: 50,
    height: 80,
    margin: 5,
  },
});
