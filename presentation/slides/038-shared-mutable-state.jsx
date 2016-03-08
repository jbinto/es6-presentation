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
      (Shared mutable) State
    </Heading>
    <List textColor="primary">
      <ListItem>What is wrong with this program?</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={require("raw!./code/shared-mutable-state-01.example")}
      margin="20px auto"
    />
    <Appear>
      <div>
        <List textColor="primary">
          <ListItem>We can all see why global variables are a bad idea. You can't be sure someone doesn't edit your variable out from underneath you.</ListItem>
          <ListItem>Just putting the variable somewhere else is just sweeping it under the rug:</ListItem>
        </List>
        <CodePane
          lang="jsx"
          source={require("raw!./code/shared-mutable-state-02.example")}
          margin="20px auto"
        />
      </div>
    </Appear>
  </Slide>

);

export default slide;
