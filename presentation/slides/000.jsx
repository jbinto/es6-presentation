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

const textProps = {
  textSize: "0.75em",
  margin: "20px 0px 0px",
  textColor: "tertiary",
}

const slide = (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} caps lineHeight={1} textColor="tertiary">
      ES6? ES2015? ES2016? TC39? WTF?
    </Heading>
    <Text {...textProps}>
      Jesse Buchanan (<a href="https://twitter.com/jessebuchananCA">@jessebuchananCA</a>)
    </Text>
    <Text {...textProps}>
      March 2016
    </Text>
  </Slide>
);

export default slide;
