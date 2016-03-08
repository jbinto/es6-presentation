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
       Object.observe
    </Heading>
    <List textColor="secondary">
      <ListItem>The future of JavaScript  ...in 2013</ListItem>
      <ListItem>Would have baked fundamental Angular/Ember concepts into the browser</ListItem>
      <ListItem>Then React happened... and observation-based frameworks fell out of fashion</ListItem>
      <ListItem>Made it to Stage 2, natively implemented in V8 (Chrome)</ListItem>
      <ListItem> Proposal withdrawn in November 2015, deprecated March 2016</ListItem>
    </List>
    <Appear>
      <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">
        Moral: Be cautious with using experimental features
      </Text>
    </Appear>
  </Slide>
);

export default slide;
