import React, { useState } from "react";
import { connect } from "react-redux";
import { ButtonGroup } from "react-native-elements";

import { filters, setFilter } from "../../reducers/filter";

const Filter = ({ setFilter }) => {
  const buttons = ["Все", "Активные", "Завершенные"];
  const filter = [
    filters.SHOW_ALL,
    filters.SHOW_ACTIVE,
    filters.SHOW_COMPLETED,
  ];
  const [selectedFilter, changeFilter] = useState(0);

  return (
    <ButtonGroup
      buttons={buttons}
      onPress={(e) => {
        changeFilter(e);
        setFilter(filter[e]);
      }}
      selectedIndex={selectedFilter}
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
    />
  );
};

const mapDispatchToProps = { setFilter };

export default connect(null, mapDispatchToProps)(Filter);
