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
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
       Transpilation
    </Heading>
    <List textColor="secondary">
      <ListItem>transpile (n): word invented by JavaScript thought leaders; meaning compile</ListItem>
      <ListItem>Browser support is all over the map for most of ES2015, thus the need for a build step</ListItem>
      <ListItem>Not all features can be transpiled. Some* require browser engine changes</ListItem>
      <ListItem>Some features require runtime support via `babel-polyfill`</ListItem>
    </List>
    <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">
      * (proxies, tail call optimization, subclassing certain built-ins)
    </Text>
  </Slide>
);

export default slide;
