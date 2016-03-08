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
      Bonus: Functional programming
    </Heading>
    <Appear>
      <Text textColor="primary">
        A monoid is a set that is closed under an associative binary operation and has an identity element I in S such that for all a in S, Ia=aI=a. Note that unlike a group, its elements need not have inverses. It can also be thought of as a semigroup with an identity element.

  A monoid must contain at least one element.

  A monoid that is commutative is, not surprisingly, known as a commutative monoid.

  Suppose that S is a set and • is some binary operation S × S → S, then S with • is a monoid if it satisfies the following two axioms:

  Associativity
  * For all a, b and c in S, the equation (a • b) • c = a • (b • c) holds.
  Identity element
  * There exists an element e in S such that for every element a in S, the equations e • a = a • e = a hold.

  In other words, a monoid is a semigroup with an identity element. It can also be thought of as a magma with associativity and identity. The identity element of a monoid is unique.[1] A monoid in which each element has an inverse is a group.
      </Text>
    </Appear>
  </Slide>

);

export default slide;
