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
  <Slide transition={["slide"]} bgColor="black">
    <BlockQuote>
      <Quote>Talk is cheap. Show me the code.</Quote>
      <Cite textColor="white">Linus Torvalds</Cite>
    </BlockQuote>
  </Slide>
);

export default slide;
