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
      <ListItem><strong>Classes</strong>: Shorthand for <code>prototype</code> syntax. Does not make JavaScript object oriented.</ListItem>
      <ListItem><strong>Promises</strong>: Alternative to callbacks. Could easily be it's own 2 hour session.</ListItem>
      <ListItem><strong>Generators</strong>: Allows a function to pause its execution via <code>yield</code>. Enables sophisticated concurrency patterns beyond promises/callbacks.</ListItem>
      <ListItem><strong>Symbols</strong>: Just like in Ruby. Immutable, useful for object keys. <code>Symbol("userid")</code></ListItem>
      <ListItem><strong>Object.assign</strong>: Copy properties from one object to another. <code>...</code> is implemented using this.</ListItem>
      <ListItem><strong>Object.freeze</strong>: Makes an object immutable. Writes/deletes will be disallowed.</ListItem>
      <ListItem><strong>Object.keys/Object.values</strong>: Returns array of just the keys, or just the values, of a JS object.</ListItem>  
    </List>
  </Slide>

);

export default slide;
