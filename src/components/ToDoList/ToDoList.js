import React, { useState } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import { filters } from "../../reducers/filter";
import { toggleTask, removeTask, editTask } from "../../reducers/todo";

import Task from "./Task";
import EditableTask from "./EditableTask";

const visibleList = (todo, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todo;
    case filters.SHOW_ACTIVE:
      return todo.filter((task) => !task.completed);
    case filters.SHOW_COMPLETED:
      return todo.filter((task) => task.completed);
  }
};

const ToDoList = ({ todo, toggleTask, removeTask, editTask }) => {
  const [editable, setEditable] = useState(-1);
  const [text, setText] = useState("");
  let swipeablesRef = Object.create(null);

  const sortedList = todo.slice(0, todo.length).sort((a, b) => {
    return a.completed - b.completed;
  });

  const recenterCurrent = (newSwipable) => {
    Object.values(swipeablesRef)
      .filter((s) => s.current && s !== newSwipable)
      .forEach((s) => s.current.recenter());
  };

  return (
    <View>
      {sortedList.map((item) => {
        if (item.id !== editable) {
          if (!swipeablesRef[item.id])
            swipeablesRef[item.id] = React.createRef();
          return (
            <Task
              ref={swipeablesRef[item.id]}
              recenterCurrent={recenterCurrent}
              item={item}
              removeTask={removeTask}
              toggleTask={toggleTask}
              setEditable={setEditable}
              setText={setText}
            />
          );
        }
        return (
          <EditableTask
            removeTask={removeTask}
            editTask={editTask}
            setEditable={setEditable}
            text={text}
            setText={setText}
          />
        );
      })}
    </View>
  );
};

const mapStateToProps = ({ todo, filter }) => ({
  todo: visibleList(todo, filter),
});

const mapDispatchToProps = { toggleTask, removeTask, editTask };

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
