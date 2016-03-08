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
      FP JavaScript code looks different - if
    </Heading>
    <List textColor="primary">
      <ListItem>You'll rarely see an `if` statement. Ternary expressions are preferred, because they can be passed to functions directly as expressions. (You can't put an `if` statement in a function call.)</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/functional-if-01.example")}
      margin="20px auto"
    />
  </Slide>

);

export default slide;
