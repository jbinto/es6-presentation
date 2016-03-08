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
      Too big and/or honourable mentions
    </Heading>
    <List>
      <ListItem>Classes: Shorthand for `prototype` syntax. Does not make JavaScript object oriented.</ListItem>
      <ListItem>Promises: Alternative to callbacks. Could easily be it's own 2 hour session.</ListItem>
      <ListItem>Generators: Allows a function to pause its execution via `yield`. Enables sophisticated concurrency patterns beyond promises/callbacks.</ListItem>
      <ListItem>Symbols: Just like in Ruby. Immutable, useful for object keys. `Symbol("userid")`</ListItem>
      <ListItem>Object.assign: Copy properties from one object to another. `...` is implemented using this.</ListItem>
      <ListItem>Object.freeze: Makes an object immutable. Writes/deletes will be disallowed.</ListItem>
      <ListItem>Object.keys/Object.values: Returns array of just the keys, or just the values, of a JS object.</ListItem>  
    </List>
  </Slide>

);

export default slide;
