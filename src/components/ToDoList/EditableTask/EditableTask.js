import React, { useCallback } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EditableTask = ({
  item,
  removeTask,
  editTask,
  setText,
  text,
  setEditable,
}) => {
  const handleEdit = useCallback(() => {
    if (text.trim() !== "") {
      editTask({ id: item.id, task: text });
    } else {
      removeTask(item.id);
    }
    setText("");
    setEditable(-1);
  }, [text]);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          width: "83%",
          height: 50,
          backgroundColor: "white",
          borderRadius: 15,
          color: "black",
          paddingLeft: 10,
          paddingRight: 10,
        }}
        placeholder={"Введите название задания"}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Icon
        style={{
          width: "10%",
          marginLeft: "5%",
          marginRight: "1%",
        }}
        size={28}
        color="green"
        name="check-circle"
        onPress={handleEdit}
      />
    </View>
  );
};

export default EditableTask;
