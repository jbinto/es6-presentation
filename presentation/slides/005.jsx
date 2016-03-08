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
       TC39
    </Heading>
    <List textColor="secondary">
      <ListItem>The official JavaScript committee</ListItem>
      <ListItem>Feature proposals go through TC39, and a set of "stages"</ListItem>
      <List>
        <ListItem>0 = Strawman</ListItem>
        <ListItem>1 = Proposal</ListItem>
        <ListItem>2 = Draft</ListItem>
        <ListItem>3 = Candidate</ListItem>
        <ListItem>4 = Finished</ListItem>
      </List>
    </List>
    <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">
      <a href="https://github.com/tc39/ecma262" target="_blank">Current Stage 1-4 feature proposals</a>
    </Text>
  </Slide>
);

export default slide;
