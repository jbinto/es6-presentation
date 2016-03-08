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
       ES6 modules
    </Heading>
    <List>
      <ListItem>Probably the most useful feature we'll use.</ListItem>
      <ListItem>Notably: missing from Kangax support table!</ListItem>
      <ListItem>Not natively supported in either browsers or Node</ListItem>
      <ListItem>ES6 defines only syntax; actual module loading mechanism spec is still TBD</ListItem>
      <ListItem>Node can use them via Babel, browsers can use them via Webpack</ListItem>
    </List>
  </Slide>

);

export default slide;
