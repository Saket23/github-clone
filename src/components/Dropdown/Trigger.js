import React from "react";
import { TriggerWrapper, Type, Selected, DropdownCaret } from "./styles";

const Trigger = ({
  type,
  selected,
  setIsDropdownVisible,
  isDropdownVisible
}) => {
  function handleOnclick() {
    setIsDropdownVisible(!isDropdownVisible);
  }
  return (
    <TriggerWrapper onClick={handleOnclick}>
      <Type>{`${type}:`}</Type>
      <Selected>{selected}</Selected>
      <DropdownCaret />
    </TriggerWrapper>
  );
};

export default Trigger;
