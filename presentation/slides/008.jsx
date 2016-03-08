import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";


const slide = (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit lineHeight={1} textColor="tertiary">
       JSX? ESNext?
    </Heading>
    <List textColor="secondary">
      <ListItem>Notably, JSX is not on any standards track whatsoever (not even stage 0)</ListItem>
      <ListItem>There are some experimental features popular with React developers that are in the various stages:</ListItem>
      <List textColor="tertiary" textSize="0.75em" margin="20px">
        <ListItem>Rest/Spread Properties (Stage 2)</ListItem>
        <ListItem>Class and Property Decorators (Stage 1)</ListItem>
        <ListItem>Class Fields & Static Properties (Stage 1)</ListItem>
      </List>
    </List>
  </Slide>
);

export default slide;