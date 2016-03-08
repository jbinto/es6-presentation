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
      <ListItem>You'll rarely (never?) see an `for` loop.</ListItem>
      <ListItem>If you're trying to take an array of N elements, and transform it into a scalar (a single bool, number, or string), use `reduce`.</ListItem>
      <ListItem>`reduce` is a little tricky at first. Play with it, and it'll become second nature.</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/functional-for-02.example")}
      margin="20px auto"
    />
  <Text textColor="black"><a href="https://jsbin.com/maceveduzu/edit?js,console">https://jsbin.com/maceveduzu/edit?js,console</a></Text>
  </Slide>

);

export default slide;
