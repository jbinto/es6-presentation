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
      Array spread operator - as better array literal
    </Heading>
    <List>
      <ListItem>Allows an array to be expanded in places where multiple arguments are expected</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/array-spread-operator-02.example")}
      margin="20px auto"
    />
  </Slide>

);

export default slide;
