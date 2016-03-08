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
      Object literal extensions - dynamic property names
    </Heading>
    <List>
      <ListItem>You can now use dynamic values in object property names (keys).</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/object-literals-03.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/xigarocaru/1/edit?js,console</Markdown>
  </Slide>

);

export default slide;
