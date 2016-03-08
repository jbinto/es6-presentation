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
       LOREM IPSUM
    </Heading>
    <List textColor="secondary">
      <ListItem>LOREM IPSUM</ListItem>
      <ListItem>LOREM IPSUM</ListItem>
      <ListItem>LOREM IPSUM</ListItem>
    </List>
    <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">
      LOREM IPSUM
    </Text>
  </Slide>
);

export default slide;
