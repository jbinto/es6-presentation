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
    <Heading size={1} lineHeight={1} textColor="tertiary">
       Babel
    </Heading>
    <List textColor="secondary">
      <ListItem>Nowadays, it's Babel + TC39 proposals doing a lot of the trailblazing</ListItem>
      <ListItem>Babel plugins let people experiment with features before they're standardized</ListItem>
      <ListItem>Babel 5 was "here's what we've got so far with ES6, install and go"</ListItem>
      <ListItem>Babel 6 is an "assemble your own language" toolkit</ListItem>
    </List>
    <Appear>
      <List textColor="secondary">
        <ListItem>Pro: Babel <strong>makes it easy</strong> to use experimental features</ListItem>
        <ListItem>Con: Babel makes it easy to use <strong>experimental features</strong></ListItem>
      </List>
    </Appear>
  </Slide>
);

export default slide;
