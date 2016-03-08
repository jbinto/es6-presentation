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
      Functions stand on their own
    </Heading>
    <List textColor="primary">
      <ListItem>In functional programming, a principle we stick by is to have each function contain all data it needs in it's argument list.</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/everything-in-args-01.example")}
      margin="20px auto"
    />
  </Slide>

);

export default slide;
