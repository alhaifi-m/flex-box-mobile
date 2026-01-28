import React from "react";
import { View, StyleSheet } from "react-native";

const RowGapAndColumnGap = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      <View style={[styles.box, styles.box5]} />
    </View>
  );
};

export default RowGapAndColumnGap;

const styles = StyleSheet.create({
  /*
    ROW GAP & COLUMN GAP — spacing BETWEEN items when they wrap into rows/columns

    ✅ rowGap:
      - space between ROWS (vertical space when flexDirection is "row" and items wrap)
      - think: distance between lines of items

    ✅ columnGap:
      - space between COLUMNS (horizontal space between items in the same row)
      - think: distance between items side-by-side

    Notes:
    - Works best with flexWrap: "wrap"
    - If items don't wrap, rowGap may look like it does nothing
    - "gap" is also supported in many RN versions, but rowGap/columnGap is clearer for teaching
  */

  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",

    // ✅ SWITCH THESE VALUES MANUALLY
    rowGap: 10,
    columnGap: 10,

    // rowGap: 0,
    // columnGap: 0,

    // rowGap: 30,
    // columnGap: 5,

    // rowGap: 5,
    // columnGap: 30,

    alignContent: "flex-start",
    padding: 10,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },

  box: {
    width: 50,
    height: 80,
  },

  box1: { backgroundColor: "orangered" },
  box2: { backgroundColor: "orange" },
  box3: { backgroundColor: "mediumseagreen" },
  box4: { backgroundColor: "deepskyblue" },
  box5: { backgroundColor: "mediumturquoise" },
});
