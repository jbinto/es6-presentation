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
       Block scoping, continued
    </Heading>
    <List>
      <ListItem>A more complex example involves a for loop, and inner functions:</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/block-scoping-03.example")}
      margin="20px auto"
    />
    <CodePane
      lang="jsx"
      source={require("raw!./code/block-scoping-04.example")}
      margin="20px auto"
    />
  <Markdown textSize="0.5em">https://jsbin.com/koxarahapi/edit?html,css,js,output</Markdown>
    <Appear>
      <Text margin="20px 0px 0px" textColor="tertiary">
        Moral: Do not use `var`, its semantics are difficult to understand
      </Text>
    </Appear>
  </Slide>
);

export default slide;
