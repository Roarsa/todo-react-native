import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";

import { filters } from "../../reducers/filter";
import {
  toggleTask as toggleTaskAction,
  removeTask as removeTaskAction,
  editTask as editTaskAction,
} from "../../reducers/todo";
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

  const toggleTask = useAction(toggleTaskAction.type);
  const removeTask = useAction(removeTaskAction.type);
  const editTask = useAction(editTaskAction.type);

  const todo = useSelector((state) => visibleList(state.todo, state.filter));

  const sortedList = todo.slice(0, todo.length).sort((a, b) => {
    return a.completed - b.completed;
  });

  const recenterCurrent = useCallback(
    (newSwipable) => {
      Object.values(swipeablesRef)
        .filter((s) => s.current && s !== newSwipable)
        .forEach((s) => s.current.recenter());
    },
    [swipeablesRef]
  );

  return (
    <ScrollView>
      {sortedList.map((item) => {
        if (item.id !== editable) {
          if (!swipeablesRef[item.id])
            swipeablesRef[item.id] = React.createRef();
          return (
            <Task
              key={item.id}
              refId={swipeablesRef[item.id]}
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
            key={item.id}
            item={item}
            removeTask={removeTask}
            editTask={editTask}
            setEditable={setEditable}
            text={text}
            setText={setText}
          />
        );
      })}
    </ScrollView>
  );
};

export default ToDoList;
