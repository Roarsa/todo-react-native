import React, { useState, useCallback } from "react";
import { ButtonGroup } from "react-native-elements";

import { filters, setFilter as setFilterAction } from "../../reducers/filter";
import useAction from "../../hooks/useAction";

const Filter = () => {
  const buttons = ["Все", "Активные", "Завершенные"];
  const filter = [
    filters.SHOW_ALL,
    filters.SHOW_ACTIVE,
    filters.SHOW_COMPLETED,
  ];
  const [selectedFilter, changeFilter] = useState(0);
  const setFilter = useAction(setFilterAction.type);

  const handleSetFilter = useCallback((e) => {
    changeFilter(e);
    setFilter(filter[e]);
  }, []);

  return (
    <ButtonGroup
      containerStyle={{
        width: "100%",
        left: -11,
        marginTop: 20,
      }}
      innerBorderStyle={{
        color: "white",
      }}
      selectedButtonStyle={{
        backgroundColor: "white",
        borderBottomWidth: 3,
        borderColor: "#A4003B",
      }}
      selectedTextStyle={{
        color: "#A4003B",
      }}
      buttons={buttons}
      selectedIndex={selectedFilter}
      onPress={handleSetFilter}
    />
  );
};

export default Filter;
