import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Task = ({ item, handleSelect }) => {
  return (
    <Pressable onPress={() => handleSelect(item.item)}>
      <Text style={styles.items}>{item.item.value}</Text>
    </Pressable>
  );
};

export default Task;

const styles = StyleSheet.create({
  items: {
    fontSize: 18,
    backgroundColor: "#e6ccb2",
    marginBottom: 10,
    borderRadius: 2,
    padding: 2,
    textAlign: "center",
  },
});
