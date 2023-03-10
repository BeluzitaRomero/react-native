import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

//Desafio 3: uso de constants
import Color from "../../constants/colorButtons";

export const InputItem = ({ onChange, itemTextState, handleAdd }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Producto"
        onChangeText={onChange}
        value={itemTextState}
        placeholderTextColor="#CAD2C5"
      />
      <Button color={Color.success} title="Agregar" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#354f52",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  input: {
    borderColor: "#CAD2C5",
    borderBottomWidth: 1,
    width: 200,
    color: "#CAD2C5",
    fontSize: 18,
  },
});
