import React from "react";
import { Tab, SingleTab, Data, Text } from "../styles/header";

const Header = ({ length }) => (
  <Tab>
    <SingleTab>
      <Text>Overview</Text>
    </SingleTab>
    <SingleTab selected>
      <Text>Repositories</Text>
      <Data>{length}</Data>
    </SingleTab>
    <SingleTab>
      <Text>Projects</Text>
      <Data>0</Data>
    </SingleTab>
    <SingleTab>
      <Text>Stars</Text>
      <Data>7</Data>
    </SingleTab>
    <SingleTab>
      <Text>Followers</Text>
      <Data>6</Data>
    </SingleTab>
    <SingleTab>
      <Text>Following</Text>
      <Data>2</Data>
    </SingleTab>
  </Tab>
);

export default Header;
