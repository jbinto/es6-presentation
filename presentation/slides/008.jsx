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
       JSX? ESNext?
    </Heading>
    <List textColor="secondary">
      <ListItem>Notably, JSX is not on any standards track whatsoever (not even stage 0)</ListItem>
      <ListItem>There are some experimental features popular with React developers that are in the various stages:</ListItem>
      <List textColor="tertiary" textSize="0.75em" margin="20px">
        <ListItem><a href="https://github.com/sebmarkbage/ecmascript-rest-spread">Rest/Spread Properties (Stage 2)</a></ListItem>
        <ListItem><a href="https://github.com/wycats/javascript-decorators/blob/master/README.md">Class and Property Decorators (Stage 1)</a></ListItem>
        <ListItem><a href="https://github.com/jeffmo/es-class-fields-and-static-properties">Class Fields & Static Properties (Stage 1)</a></ListItem>
      </List>
    </List>
  </Slide>
);

export default slide;
