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
    <Heading size={1} fit lineHeight={1} textColor="tertiary">
       Block scoping, aka `let`
    </Heading>
    <List>
      <ListItem>In other languages (C, Java, etc.) variables are scoped to a block</ListItem>
      <ListItem>ES5 is funny in that variables are scoped to a function</ListItem>
      <ListItem>`let` scopes to the nearest block, statement or expression</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/block-scoping-01.example")}
      margin="20px auto"
    />
    <CodePane
      lang="jsx"
      source={require("raw!./code/block-scoping-02.example")}
      margin="20px auto"
    />
    <Markdown textSize="0.5em">https://jsbin.com/didaqoqatu/2/edit?js,console</Markdown>
  </Slide>
);

export default slide;
