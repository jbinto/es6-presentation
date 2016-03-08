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
       Destructuring assignment - objects
    </Heading>
    <List>
      <ListItem>Extract data using a syntax that resembles literal objects/arrays</ListItem>
      <ListItem>Object destructuring:</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/destructuring-02.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/fabigagawu/edit?js,console,output</Markdown>
  </Slide>

);

export default slide;
