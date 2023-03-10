import { Button, Text, View, Modal, StyleSheet, Pressable } from "react-native";

//Desafio 3: uso de constants
import Color from "../../constants/colorButtons";

export const ModalDeleteAlert = ({
  visible,
  itemValue,
  onPressDel,
  onPressCancel,
}) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <Pressable style={styles.modalContainer}>
        <View style={styles.modalTitle}>
          <Text style={styles.modalText}>Modal de mierda</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalText}>
            ¿Serugro que desea borrar este elemento?
          </Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalItem}>{itemValue}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={styles.modalButton}>
            <Button
              color={Color.delete}
              onPress={onPressDel}
              title="Confirmar"
            />
          </View>
          <View style={styles.modalButton}>
            <Button title="Cancelar" onPress={onPressCancel} />
          </View>
        </View>
      </Pressable>
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
    marginBottom: 4,
  },
  modalTitle: {
    fontSize: 18,
    alignItems: "center",
  },
  modalMessage: {
    marginBottom: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  modalItem: {
    fontSize: 30,
    color: "black",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingBottom: 4,
    backgroundColor: "#e6ccb2",
  },
  modalButton: {
    margin: 15,
  },

  //   modalColor: {
  //     color: "#CAD2C5",
  //     paddingTop: 10,
  //   },
});
