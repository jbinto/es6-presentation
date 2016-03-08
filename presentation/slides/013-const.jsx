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
  <Slide transition={["zoom"]} bgColor="primary" maxHeight="1000px">
    <Heading size={1} lineHeight={1} textColor="tertiary">
       const
    </Heading>
    <List>
      <ListItem>`const` has the same scoping semantics as `let`, with one additional catch:</ListItem>
      <ListItem>Once defined, a `const` variable cannot be reassigned to</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/const-01.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/nigowibinu/edit?js,console</Markdown>
  </Slide>
);

export default slide;
