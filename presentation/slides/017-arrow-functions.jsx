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
       Arrow functions and `this`
    </Heading>
    <List>
      <ListItem>Inside ES6 arrow functions, `this` is the same `this` as where the arrow function was declared.</ListItem>
      <ListItem>In ES5, a new `this` was defined for each function. This meant having to use a temporary `self` variable:</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/arrows-03.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/fabigagawu/edit?js,console</Markdown>
    <Appear>
      <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">
        <a href="http://blog.getify.com/arrow-this/">Further reading: More quirks about `this` and arrow functions</a>
      </Text>
    </Appear>
  </Slide>

);

export default slide;
