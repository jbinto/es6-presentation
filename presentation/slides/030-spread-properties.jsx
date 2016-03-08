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
      Spread Properties - merging objects
    </Heading>
    <List>
      <ListItem>HERE BE DRAGONS (Stage 2 proposal)</ListItem>
      <ListItem>"Spread properties in object initializers copies own enumerable properties from a provided object onto the newly created object."</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/spread-properties-01.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/dirimarote/edit?js,console</Markdown>
    <Text textColor="tertiary" textSize="0.75em">
      <a href="https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md">Further reading: TC39 Stage 2 proposal</a>
    </Text>
  </Slide>

);

export default slide;
