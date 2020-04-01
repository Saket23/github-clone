import React from "react";
import { ListWrapper, Heading, SingleList } from "./styles";

const List = ({
  options,
  selected,
  type,
  listVisible,
  onListClick,
  setIsDropdownVisible
}) => {
  const handleListClick = value => () => {
    onListClick(value);
    setIsDropdownVisible();
  };

  return (
    <ListWrapper listVisible={listVisible}>
      <Heading>Select {type}</Heading>
      <SingleList onClick={handleListClick("All")}>
        <svg
          className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
          viewBox="0 0 12 16"
          version="1.1"
          width="12"
          height="16"
          aria-hidden="true"
          visibility={selected === "All" ? "visible" : "hidden"}
        >
          <path
            fillRule="evenodd"
            d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
          ></path>
        </svg>
        <span>All</span>
      </SingleList>
      {options &&
        options.map(option => {
          return (
            <SingleList
              key={option.key}
              onClick={handleListClick(option.value)}
            >
              <svg
                className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
                visibility={selected === option.value ? "visible" : "hidden"}
              >
                <path
                  fillRule="evenodd"
                  d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
                ></path>
              </svg>
              <span>{option.value}</span>
            </SingleList>
          );
        })}
    </ListWrapper>
  );
};

export default List;
