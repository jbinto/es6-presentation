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
      Side effects
    </Heading>
    <List textColor="primary">
      <Appear><ListItem>A pure function is a function that takes one or more inputs, and returns a single output.</ListItem></Appear>
      <Appear><ListItem>If you call a pure function with the same inputs, it will ALWAYS return the same output, regardless of how full your disk is, the status of your network connection, the time of day, or the tide of the moon.</ListItem></Appear>
      <Appear><ListItem>If you call a pure function 50,000 times, it always returns the same thing.</ListItem></Appear>
      <Appear><ListItem>A pure function has NO side effects.</ListItem></Appear>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/pure-functions-01.example")}
      margin="20px auto"
    />
  </Slide>

);

export default slide;
