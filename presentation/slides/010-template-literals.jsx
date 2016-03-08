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
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit lineHeight={1} textColor="tertiary">
       Let's start with an easy win: Template literals
    </Heading>
    <CodePane
      lang="jsx"
      source={require("raw!./code/template-literals-01.example")}
      margin="20px auto"
    />
    <CodePane
      lang="jsx"
      source={require("raw!./code/template-literals-02.example")}
      margin="20px auto"
    />
  <Markdown>https://jsbin.com/xuqoqahaqe/edit?js,console</Markdown>
  </Slide>
);

export default slide;
