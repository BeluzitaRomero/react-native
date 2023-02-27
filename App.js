import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";

import { ModalError } from "./ModalError";
import { ModalDeleteAlert } from "./ModalDeleteAlert";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  //*Estado para el error de input vacio
  const [err, setErr] = useState(false);

  useEffect(() => {
    console.log("array", items);
  }, [items]);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    if (itemText !== "") {
      setItems((prev) => [...prev, { id: Date.now(), value: itemText }]);
      setItemText("");
    } else {
      showErr();
    }
  };

  const onHandlerDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setItemSelected(null);
    setModalVisible(!modalVisible);
  };

  const selectItem = (item) => {
    setItemSelected(item);
    setModalVisible(!modalVisible);
  };

  const showErr = () => {
    setErr((prev) => !prev);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Producto"
          onChangeText={onChangeText}
          value={itemText}
          placeholderTextColor="#CAD2C5"
        />
        <Button title="Agregar" onPress={addItem} />
      </View>
      <View style={styles.itemsContainer}>
        <FlatList
          style={{ width: "80%" }}
          data={items}
          renderItem={(itemData) => (
            <Pressable onPress={() => selectItem(itemData.item)}>
              <Text style={styles.items}>{itemData.item.value}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ModalDeleteAlert
        visible={modalVisible}
        itemValue={itemSelected?.value}
        onPressDel={() => onHandlerDelete(itemSelected?.id)}
        onPressCancel={() => {
          setModalVisible(false);
          setItemSelected(null);
        }}
      />
      <ModalError onPress={showErr} state={err} />
    </View>
  );
}

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
  itemsContainer: {
    backgroundColor: "#52796F",
    padding: 10,
    flex: 2,
    alignItems: "center",
  },
  items: {
    fontSize: 18,
    backgroundColor: "#e6ccb2",
    marginBottom: 10,
    borderRadius: 2,
    padding: 2,
    textAlign: "center",
  },
});
