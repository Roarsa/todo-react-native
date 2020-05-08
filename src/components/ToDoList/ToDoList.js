import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";

import { filters } from "../../reducers/filter";
import { toggleTask, removeTask, editTask } from "../../reducers/todo";
import useAction from "../../hooks/useAction";

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

const ToDoList = () => {
  const [editable, setEditable] = useState(-1);
  const [text, setText] = useState("");
  let swipeablesRef = Object.create(null);

  const todo = useSelector((state) => visibleList(state.todo, state.filter));

  const sortedList = todo.slice(0, todo.length).sort((a, b) => {
    return a.completed - b.completed;
  });

  console.log(sortedList);

  const recenterCurrent = useCallback((newSwipable) => {
    Object.values(swipeablesRef)
      .filter((s) => s.current && s !== newSwipable)
      .forEach((s) => s.current.recenter());
  }, []);

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
              removeTask={useAction(removeTask.type)}
              toggleTask={useAction(toggleTask.type)}
              setEditable={setEditable}
              setText={setText}
            />
          );
        }
        return (
          <EditableTask
            removeTask={useAction(removeTask)}
            editTask={useAction(editTask)}
            setEditable={setEditable}
            text={text}
            setText={setText}
          />
        );
      })}
    </View>
  );
};

export default ToDoList;
