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
  <Slide transition={["zoom"]} bgColor="primary" maxHeight={1000}>
    <Heading size={1} fit lineHeight={1} textColor="tertiary">
       Arrow functions - expressions
    </Heading>
    <List>
      <ListItem>Similar to `lambda` expressions in Ruby</ListItem>
      <ListItem>No curly braces, implicit return</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/arrows-02.example")}
      margin="20px auto"
    />
  </Slide>
);

export default slide;
