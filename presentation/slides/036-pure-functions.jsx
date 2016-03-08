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
  <Slide transition={["zoom"]} bgColor="tertiary" maxHeight={1000}>
    <Heading size={1} fit lineHeight={1} textColor="primary">
      Side effects
    </Heading>
    <List textColor="primary">
      <Appear><ListItem>Anything that is useful in a computer program is a <strong>side effect</strong>.</ListItem></Appear>
      <Appear><ListItem>Writing to disk, opening a network connection, printing to screen, opening an audio device, sending an email.</ListItem></Appear>
      <Appear><ListItem>These things are useful, but fragile!</ListItem></Appear>
      <Appear><ListItem>Functional programming is all about separating the portions of your logic that are <strong>pure</strong> and those that contain <strong>side effects</strong>.</ListItem></Appear>
      <Appear><ListItem>Consider unit tests: it is trivial to test the `double` function. It is much harder to test that you hit the SendGrid API and turned on an LED on a serial port.</ListItem></Appear>
    </List>
  </Slide>

);

export default slide;
