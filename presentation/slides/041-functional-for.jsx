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
  <Slide transition={["zoom"]} bgColor="tertiary" maxHeight={1000}>
    <Heading size={1} fit lineHeight={1} textColor="primary">
      FP JavaScript code looks different - for
    </Heading>
    <List textColor="primary">
      <ListItem>You'll rarely (never?) see an <code>for</code> loop.</ListItem>
      <ListItem>If you're trying to take an array of N elements, and transform it into a different array of N elements, use <code>map</code>.</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/functional-for-01.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/zihitoyayo/edit?js,console</Markdown>
  </Slide>

);

export default slide;
