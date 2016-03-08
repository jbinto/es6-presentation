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


//
// const slides = [
//   require("./slides/001.md"),
//   require("./slides/002.md"),
//   require("./slides/003.jsx"),

//   `# ES6? ES2015? ES2016? TC39? WTF?
//
// * ECMAScript a.k.a. JavaScript hasn't been updated since 2011
// * ES6 was a big push to get JS modernized, and was a lot to chew at once
// * ES6 has 12 "large features"\*, and dozens of more medium/minor features
// * Renamed to ES2015, and subsequent versions will be ES201[6789]
//
// \* (modules, spread operator, object literal extensions, for..of loops, template literals, arrow functions, class, generators, typed arrays, Promise, Symbol)
//   `,
//
//   `# Can I use any of this stuff today?
//
// * https://kangax.github.io/compat-table/es6/
//   `,
//
//   `# Transpilation and Babel
//
// * transpile (n): word invented by JavaScript thought leaders; meaning compile
// * Browser support is all over the map for most of ES2015, thus the need for a build step
// * Not all features can be transpiled. Some require browser engine changes\*
//
// \* (proxies, tail call optimization, subclassing certain built-ins)
//
// * Some features require runtime support via \`babel-polyfill\`
//   `
// ];

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

    const jsx = (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              ES6? ES2015? ES2016? TC39? WTF?
            </Heading>
            <List textColor="secondary">
              <ListItem>ECMAScript a.k.a. JavaScript hasn't been updated since 2011</ListItem>
              <ListItem>ES6 was a big push to get JS modernized, and was a lot to chew at once</ListItem>
              <ListItem>ES6 has 12 "large features"*, and dozens of more medium/minor features</ListItem>
              <ListItem>Renamed to ES2015, and subsequent versions will be ES201[6789]</ListItem>
            </List>
            <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">* (modules, spread operator, object literal extensions, for..of loops, template literals, arrow functions, class, generators, typed arrays, Promise, Symbol)</Text>
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              ES6? ES2015? ES2016? TC39? WTF?
            </Heading>
            <List textColor="secondary">
              <ListItem>ECMAScript a.k.a. JavaScript hasn't been updated since 2011</ListItem>
              <ListItem>ES6 was a big push to get JS modernized, and was a lot to chew at once</ListItem>
              <ListItem>ES6 has 12 "large features"*, and dozens of more medium/minor features</ListItem>
              <ListItem>Renamed to ES2015, and subsequent versions will be ES201[6789]</ListItem>
            </List>
            <Text textSize="0.75em" margin="20px 0px 0px" textColor="tertiary">* (modules, spread operator, object literal extensions, for..of loops, template literals, arrow functions, class, generators, typed arrays, Promise, Symbol)</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
