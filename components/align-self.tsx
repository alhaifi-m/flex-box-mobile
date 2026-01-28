import React from "react";
import { View, StyleSheet } from "react-native";

const AlignSelfLayout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View
        style={[
          styles.box,
          styles.specialBox, // this is the one we change alignSelf on
          { backgroundColor: "skyblue" },
        ]}
      />
      <View style={[styles.specialBox, { backgroundColor: "steelblue" }]} />
    </View>
  );
};

export default AlignSelfLayout;

const styles = StyleSheet.create({
  /*
    ALIGN SELF — overrides alignItems for ONE specific item only (cross axis only)

    auto        → uses the container’s alignItems value (default behavior)
    stretch     → item stretches to fill the cross axis (if no fixed size)
    flex-start  → item moves to the start of the cross axis
    flex-end    → item moves to the end of the cross axis
    center      → item centers itself on the cross axis
    baseline    → item aligns with text baseline of siblings (used with text)
  */

  container: {
    flex: 1,
    flexDirection: "row",   // main axis = horizontal, cross axis = vertical

    alignItems: "flex-start", // affects ALL boxes by default

    padding: 20,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },

  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
//In Flexbox, the container controls alignment using alignItems.
// But any single item can override this rule using alignSelf.”
  specialBox: {
    // 🔹 SWITCH THESE ONE BY ONE (affects ONLY this box)

    // alignSelf: "auto",
    // alignSelf: "stretch",
    // alignSelf: "flex-start",
    // alignSelf: "flex-end",
     alignSelf: "center",
    // alignSelf: "baseline",
  },
});
