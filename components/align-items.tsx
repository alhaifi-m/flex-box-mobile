import React from "react";
import { View, StyleSheet } from "react-native";

const AlignItemsLayout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: "steelblue",
            width: "auto",
            minWidth: 50,
          },
        ]}
      />
    </View>
  );
};

export default AlignItemsLayout;

const styles = StyleSheet.create({
  /*
    ALIGN ITEMS — controls alignment on the CROSS axis (perpendicular to flexDirection)

    stretch     → items stretch to fill the cross axis (default, only works without fixed height/width)
    flex-start  → items align at the start of the cross axis (top in row, left in column)
    flex-end    → items align at the end of the cross axis (bottom in row, right in column)
    center      → items centered on the cross axis
    baseline    → items aligned by their text baseline (useful for text rows)
    default is stretch
  */

  container: {
    flex: 1,
    flexDirection: "row",   // main axis = horizontal, cross axis = vertical

    // alignItems: "stretch",
     alignItems: "flex-start",
    //  alignItems: "flex-end",
     // alignItems: "center",
    // alignItems: "baseline",

    padding: 20,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },

  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
