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
       ES6 modules - destructuring in imports
    </Heading>
    <List>
      <ListItem>You can use destructuring in your imports, too:</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/es6-modules-03.example")}
      margin="20px auto"
    />
    <CodePane
      lang="jsx"
      source={require("raw!./code/es6-modules-04.example")}
      margin="20px auto"
    />
  </Slide>
);

export default slide;
