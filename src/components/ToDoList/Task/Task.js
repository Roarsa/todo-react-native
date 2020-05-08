import React, { useCallback } from "react";
import { TouchableHighlight } from "react-native";
import { ListItem } from "react-native-elements";
import Swipeable from "react-native-swipeable";
import Icon from "react-native-vector-icons/FontAwesome";

const Task = ({
  refId,
  recenterCurrent,
  item,
  removeTask,
  toggleTask,
  setEditable,
  setText,
}) => {
  const handleRecenter = useCallback(() => recenterCurrent(refId));
  const handleToggle = useCallback(() => toggleTask(item.id));
  const handleRemove = useCallback(() => {
    removeTask(item.id);
    recenterCurrent(null);
  }, []);
  const handleEdit = useCallback(() => {
    setEditable(item.id);
    setText(item.task);
  }, []);

  return (
    <Swipeable
      ref={refId}
      onRightButtonsOpenComplete={handleRecenter}
      rightButtons={[
        <TouchableHighlight
          style={{
            position: "relative",
            height: "100%",
            backgroundColor: "red",
            justifyContent: "center",
            paddingLeft: 23,
          }}
          onPress={handleRemove}
        >
          <Icon name="trash" size={35} />
        </TouchableHighlight>,
        <TouchableHighlight
          onPress={handleEdit}
          style={{
            position: "relative",
            height: "100%",
            backgroundColor: "yellow",
            justifyContent: "center",
            paddingLeft: 23,
          }}
        >
          <Icon name="pencil" size={35} />
        </TouchableHighlight>,
      ]}
    >
      <ListItem
        containerStyle={{
          paddingLeft: 20,
          minHeight: 50,
        }}
        titleStyle={
          item.completed && {
            color: "gray",
            textDecorationLine: "line-through",
          }
        }
        key={item.id}
        title={item.task}
        bottomDivider
        checkBox={{
          onPress: handleToggle,
          checked: item.completed,
          checkedColor: "#A4003B",
        }}
      />
    </Swipeable>
  );
};

export default Task;
