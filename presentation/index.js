// Import React
import React from "react";

// Import Spectacle Core tags
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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#DFDFF7",
  secondary: "#7F80B2",
  tertiary: "#1A1C5A",
  quaternary: "#000000"
});


// https://webpack.github.io/docs/context.html
const context = require.context("./slides", false, /\.(md|jsx)$/);
const slides = context.keys().map(context);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        {slides.map((slide) =>
          typeof slide === "string"
            ? <Slide transition={["zoom"]} bgColor="primary" maxHeight={1000}>
                <Markdown textColor="secondary">{slide}</Markdown>
              </Slide>
            : slide.default
        )}
        </Deck>
      </Spectacle>
    );
  }
}
