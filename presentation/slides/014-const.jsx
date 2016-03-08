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
  <Slide transition={["zoom"]} bgColor="primary" maxHeight="1000px">
    <Heading size={1} fit lineHeight={1} textColor="tertiary">
       const !== immutability
    </Heading>
    <List>
      <ListItem>All const does is prevent <strong>reassignment</strong></ListItem>
      <ListItem>This does not make your underlying data immutable!</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/const-02.example")}
      margin="20px auto"
    />
    <Markdown>https://jsbin.com/razozayezu/edit?js,console</Markdown>
    <Appear>
      <Text margin="20px 0px 0px" textColor="tertiary" textSize="0.75em">
        Moral: Reassignment is rare, but it costs nothing to prevent it. Use `const` everywhere, and `let` where you really need it.
      </Text>
    </Appear>
  </Slide>
);

export default slide;
