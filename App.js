import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";

// import { ModalError } from "./src/components/Modal/ModalError";
// import { ModalDeleteAlert } from "./src/components/Modal/ModalDeleteAlert";
// import { List } from "./src/components/List/List";
import Home from "./src/components/screen/Home";
import {
  List,
  InputItem,
  ModalDeleteAlert,
  ModalError,
} from "./src/components";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const [start, setStart] = useState(false);

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

  // Desafio 3 -
  const handleAddTask = () => {
    setStart(!start);
  };

  if (start) {
    return (
      <View style={{ flex: 1 }}>
        <InputItem
          onChange={onChangeText}
          handleAdd={addItem}
          itemTextState={itemText}
        />
        <List items={items} handleSelect={selectItem} />

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
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Home handleStart={handleAddTask} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
