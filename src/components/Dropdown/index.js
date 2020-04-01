import React, { useRef, useState, useEffect } from "react";
import Trigger from "./Trigger";
import List from "./List";
import { Wrapper } from "./styles";

const Dropdown = ({ type, options, selected, onListClick }) => {
  const currentNode = useRef();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  });

  const handleClick = e => {
    if (
      currentNode &&
      currentNode.current.innerHTML.includes(e.target.innerHTML)
    ) {
      // inside click
      return;
    }
    // outside click
    setIsDropdownVisible(false);
  };

  return (
    <Wrapper ref={currentNode}>
      <Trigger
        type={type}
        selected={selected}
        setIsDropdownVisible={setIsDropdownVisible}
        isDropdownVisible={isDropdownVisible}
      />
      <List
        options={options}
        type={type}
        selected={selected}
        listVisible={isDropdownVisible}
        onListClick={onListClick}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    </Wrapper>
  );
};

export default Dropdown;
