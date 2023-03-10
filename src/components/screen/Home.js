import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../constants/colorButtons";

const home = ({ handleStart }) => {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>
        Si quieres agregar una nueva tarea, haz click en continuar
      </Text>
      <View style={styles.button}>
        <Button color={Color.success} onPress={handleStart} title="Continuar" />
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  home: {
    height: "100%",
    backgroundColor: "#354F52",
    justifyContent: "center",
  },
  text: {
    color: "#CAD2C5",
    paddingTop: 10,
    fontSize: 18,
    margin: 15,
  },
  button: {
    margin: 15,
  },
});
