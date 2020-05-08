import React from "react";
import { TouchableHighlight } from "react-native";
import { ListItem } from "react-native-elements";
import Swipeable from "react-native-swipeable";
import Icon from "react-native-vector-icons/FontAwesome";

const Task = ({
  ref,
  recenterCurrent,
  item,
  removeTask,
  toggleTask,
  setEditable,
  setText,
}) => (
  <Swipeable
    ref={ref}
    onRightButtonsOpenComplete={() => recenterCurrent(ref)}
    rightButtons={[
      <TouchableHighlight
        onPress={() => {
          //removeTask(item.id);
          //recenterCurrent(null);
        }}
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "red",
          justifyContent: "center",
          paddingLeft: 23,
        }}
      >
        <Icon name="trash" size={35} />
      </TouchableHighlight>,
      <TouchableHighlight
        onPress={() => {
          //setEditable(item.id);
          //setText(item.task);
        }}
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
      key={item.id}
      title={item.task}
      bottomDivider
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
      checkBox={{
        //onPress: () => toggleTask(item.id),
        checked: item.completed,
        checkedColor: "#A4003B",
      }}
    />
  </Swipeable>
);

export default Task;
