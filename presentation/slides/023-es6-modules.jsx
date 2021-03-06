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
       ES6 modules - named exports
    </Heading>
    <List>
      <ListItem>So far we've only seen unnamed, `default` exports.</ListItem>
      <ListItem>You can export multiple things per module using named exports.</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/es6-modules-05.example")}
      margin="20px auto"
    />
  </Slide>
);

export default slide;
