import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Task from "./Task";

export const List = ({ items, handleSelect }) => {
  return (
    <View style={styles.itemsContainer}>
      <FlatList
        style={{ width: "80%" }}
        data={items}
        renderItem={(itemData) => (
          <Task item={itemData} handleSelect={handleSelect} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    backgroundColor: "#52796F",
    padding: 10,
    flex: 2,
    alignItems: "center",
  },
});
