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
       What about JSX, ES7, ES2016, etc.
    </Heading>
    <List textColor="secondary">
      <ListItem>The transition to ES2015 was painful as it was a major upgrade driven by spec authors and browser devs</ListItem>
      <ListItem>ES2016 and beyond will be much smaller, piecemeal upgrades</ListItem>
      <ListItem>It's best to think of ECMAScript as a "living spec" rather than rigidly versioned</ListItem>
    </List>
    <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">
      <a href="http://www.2ality.com/2016/01/ecmascript-2016.html" target="_blank">(ES2016 only has 2 features!)</a>
    </Text>
  </Slide>
);

export default slide;
