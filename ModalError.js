import { Button, Text, View, Modal, StyleSheet } from "react-native";

export const ModalError = ({ onPress, state }) => {
  return (
    <Modal animationType="slide" visible={state}>
      <View style={styles.modalContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.modalText}>
            No se pueden agregar elementos vacios
          </Text>
        </View>
        <View style={styles.modalButton}>
          <Button onPress={onPress} title="Aceptar" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    backgroundColor: "#354F52",
    justifyContent: "center",
  },
  modalText: {
    color: "#CAD2C5",
    paddingTop: 10,
    fontSize: 18,
  },
  modalButton: {
    margin: 15,
  },
});
