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
      ES6? ES2015? ES2016? TC39? WTF?
    </Heading>
    <List textColor="secondary">
      <ListItem>ECMAScript a.k.a. JavaScript hasn't been updated since 2011</ListItem>
      <ListItem>ES6 was a big push to get JS modernized, and was a lot to chew at once</ListItem>
      <ListItem>ES6 has 12 "large features"*, and dozens of more medium/minor features</ListItem>
      <ListItem>Renamed to ES2015, and subsequent versions will be ES201[6789]</ListItem>
    </List>
    <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">* (modules, spread operator, object literal extensions, for..of loops, template literals, arrow functions, class, generators, typed arrays, Promise, Symbol)</Text>
  </Slide>
);

export default slide;
