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
       ES6 modules - default exports & simple imports
    </Heading>
    <CodePane
      lang="jsx"
      source={require("raw!./code/es6-modules-01.example")}
      margin="20px auto"
    />
    <List>
      <ListItem>`.js` extension is optional</ListItem>
      <ListItem>`./` is a UNIX path, e.g. current directory.</ListItem>
      <ListItem>Path can be omitted if importing something from `node_modules`</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/es6-modules-01.example")}
      margin="20px auto"
    />
  </Slide>
);

export default slide;
