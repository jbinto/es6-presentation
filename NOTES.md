# 10:04am

This week I'm going to focus on a ES6/"functional programming lite" presentation for the group.

Big brainstorm of stuff:

* [DONE] what is ES6 (ES2015, ES2016, etc)
* [DONE] ES6 is huge, ES7 is tiny, each subsequent will be tinier
* [DONE] TC39, stage0/1/2/3/4, babel, kangax
  -> horror stories about `Object.observe`

* [DONE] ES6 modules
* [DONE] arrow functions
* [DONE] const/let (with bonus segue: immutability)
* [DONE] template literals!!!
* [DONE] destructuring arrays
* [DONE] destructuring objects (ES7)
* [DONE] array spread operator
* [DONE] object rest/spread parameters
* [DONE] object literal extensions

---

Maybe if there's time:

* Classes
* Generators
* Symbols
* Object.assign, Object.freeze, Object.values, Object.keys
* Array.includes, String.includes,


Honourable mentions:

* Promises
* octal/binary literals
* Proxy




Functional programming lite stuffs:

* pure functions and side effects
* expressions vs. statements (e.g. why I can't put `if` in jsx blocks)
* `map` vs iteration
* `reduce` vs iteration




Goal:

Use Spectacle library and gists/jsbins.

----

# ES6? ES2015? ES2016? TC39? WTF?

* ECMAScript a.k.a. JavaScript hasn't been updated since 2011
* ES6 was a big push to get JS modernized, and was a lot to chew at once
* ES6 has 12 "large features"\*, and dozens of more medium/minor features
* Renamed to ES2015, and subsequent versions will be ES201[6789]

\* (modules, spread operator, object literal extensions, for..of loops, template literals, arrow functions, class, generators, typed arrays, Promise, Symbol)

----

# Can I use any of this stuff today?

* https://kangax.github.io/compat-table/es6/

[screenshot of kangax]

----

# Transpilation and Babel

* transpile (n): word invented by JavaScript thought leaders; meaning compile
* Browser support is all over the map for most of ES2015, thus the need for a build step
* CoffeeScript was the first popular compile-to-JS language
* Now, we have "compile-to-ES5" languages that target an actual standard
* There's really two(+) ES2015's:
  * the one supported by the browser today
    [screenshot of console.log]
  * the one supported by Babel today
* Not all features can be transpiled. Some require browser engine changes\*

\* (proxies, tail call optimization, subclassing certain built-ins)

* Some features require runtime support via `babel-polyfill`

----

# What about JSX, ES7, ES2016, etc.

* The transition to ES2015 was painful as it was a major upgrade driven by spec authors and browser devs
* ES2016 and beyond will be much smaller, piecemeal upgrades

[screenshot of finalized ES2016/ES7 features]


# TC39?

* The official JavaScript committee
* Feature proposals go through TC39, and a set of "stages"
  * 0 = Strawman
  * 1 = Proposal
  * 2 = Draft
  * 3 = Candidate
  * 4 = Finished

[screenshot of https://github.com/tc39/ecma262]

* Nowadays, it's Babel + TC39 proposals doing a lot of the trailblazing
* Babel plugins let people experiment with features before they're standardized
* Babel 5 was "here's what we've got so far with ES6, install and go"
* Babel 6 is an "assemble your own language" toolkit

* Pro: Babel **makes it easy** to use experimental features
* Con: Babel makes it easy to use **experimental features**

# Object.observe

* The future of JavaScript  ...in 2013
* Would have baked fundamental Angular/Ember concepts into the browser
* Then React happened... and observation-based frameworks fell out of fashion
* Made it to Stage 2, natively implemented in V8 (Chrome)
* Proposal withdrawn in November 2015, deprecated March 2016

* Moral: Be cautious with using experimental features

# JSX? ESNext?

* Notably, JSX is not on any standards track whatsoever (not even stage 0)
* There are some experimental features popular with React developers that are in the various stages:

  * Rest/Spread Properties (Stage 2)
  * Class and Property Decorators (Stage 1)
  * Class Fields & Static Properties (Stage 1)

# Show me the code

“Talk is cheap. Show me the code.”
- Linus Torvalds

# Let's start with an easy win: Template literals

```js
var name = "Jesse";
console.log('Hi ' + name + ', it is currently ' + Date.now());
```

```js
var name = "Jesse";
// use backticks (``) and dollar-curly-brace ${} for interpolation
console.log(`Hi ${name}, it is currently ${Date.now()}`);
```

# Block scoping, aka `let`

* In every other sane language (C, Java, etc.) variables are scoped to a block
* JavaScript (ES5) is funny in that variables are scoped to a function
* If a variable is declared using `var` in the middle of a function, it is "hoisted" to the top
* `let` scopes variables to the nearest block, statement or expression

```js
function doSomething(wasError) {
  // at this point, errorMessage is declared, due to hoisting, but not defined
  console.log(errorMessage); // undefined

  if (wasError) {
    var errorMessage = "Something broke";
  }

  console.log(errorMessage); // "Something broke"
}
```

```js
function doSomething(wasError) {
  console.log(errorMessage); // ReferenceError: errorMessage is not defined

  if (wasError) {
    let errorMessage = "Something broke";
  }
  console.log(errorMessage); // ReferenceError: errorMessage is not defined
}
```

# Block scoping, continued

* A more complex example involves a for loop, and inner functions:

```js
for (var i = 1; i <= 5; i++) {
  $('#div' + i).click(function anon() {
    alert(i);  // this will always alert(6)

    // `anon` is declared 5 times, but each time it runs, the
    // variable `i` has already been set to 6.
  });
}
```

```js
for (var i = 1; i <= 5; i++) {
  let j = i;
  $('#div' + i).click(function anon() {
    alert(j);  // this will alert 1, 2, 3, 4 or 5
    // now, each `anon` function binds to a different `j` each time.
  });
}
```

https://jsbin.com/giwamureqo/edit?html,css,js,console,output

* Moral: Do not use `var`, its semantics are difficult to understand

# const

* `const` has the same scoping semantics as `let`, with one additional catch:
* Once defined, a `const` variable cannot be reassigned to

```js
const MEANING_OF_LIFE = 42;
MEANING_OF_LIFE = "poutine";  // "MEANING_OF_LIFE" is read-only
```

# const !== immutability

* All const does is prevent **reassignment**
* This does not make your underlying data immutable!

```js
const result = {
  error: false,
  payload: 24980
}

// const prevents you from doing this...
result = { error: true, payload: 0 };  // "result" is read-only

// but you CAN do this...
result.error = true;
result.payload = 0;

* Moral: Reassignment is rare, but it costs nothing to prevent it. Use `const` everywhere, and `let` where you really need it.
```

# Arrow functions - simple

* At their simplest, arrow functions just make code terser by a few chars

```js
$('body').click(function() { console.log('hello world'); })
```

```js
$('body').click(() => { console.log('hello world'); })
```

# Arrow function - expressions

* Similar to `lambda` expressions in Ruby

```js
// equivalent to:
// const double = function(x) { return x * 2; }
const double = x => x * 2;
console.log(double(4)); // 8;
```

```js
const addTwoNumbers = (x, y) => x + y;
console.log(addTwoNumbers(5, 10));  // 15;
```

# Arrow functions and `this`

* Inside ES6 arrow functions, `this` is the same `this` as where the arrow function was declared.
* In ES5, a new `this` was defined for each function. This meant having to use a temporary `self` variable:

```js
function Person() {
  this.age = 0;
  var self = this;
  setInterval(function growUp() {
    self.age++;
  }, 1000);
}
```

* In ES6, we can simply do:

```js
function Person() {
  this.age = 0;
  setInterval(() => { self.age++; }, 1000);
}
```

\* More quirks about `this` and arrow functions: http://blog.getify.com/arrow-this/

# Destructuring assignment - arrays

* Extract data using a syntax that resembles literal objects/arrays
* Array destructuring:

```js
function getMinAndMax() {
  return [5, 2389];
}

// equivalent to:
// const temp = getMinAndMax();
// const min = temp[0];
// const max = temp[1];
const [min, max] = getMinAndMax();

console.log(min); // 5
console.log(max); // 2389
```

# Destructuring assignment - objects

* Extract data using a syntax that resembles literal objects/arrays
* Object destructuring:

```js
const getUserInfo = () => {
  username: 'jbinto',
  realname: 'Jesse',
  token: '24023893289',
  admin: true,
};

// equivalent to:
// const temp = getUserInfo();
// const username = temp.username;
// ...
const { username, admin, authenticationToken: token } = getUserInfo();
console.log(username); // 'jbinto'
console.log(admin);  // true
console.log(authenticationToken);  // 24023893289
```

# ES6 modules

* Probably the most useful feature we'll use.
* Notably: missing from Kangax support table!
* Not natively supported in either browsers or Node
* ES6 defines only syntax; actual module loading mechanism is still TBD.
* Node can use them via Babel, browsers can use them via Webpack

# ES6 modules - default exports & simple imports

```js
// utils/the_file_doubler_is_in.js
const doubler = (x) => x * 2;
export default doubler;

// main.js
import doubler from './the_file_doubler_is_in';
console.log(doubler(5));  // 25
```

* Notes:
  * `.js` extension is optional
  * `./` is a UNIX path, e.g. current directory.
  * Path can be omitted if importing something from `node_modules`:

```js
// main.js, in a project with a node_modules directory
import ReactDOM from 'react-dom';
```

# ES6 modules - destructuring in imports

* You can use destructuring in your imports, too:

```js
// api_client.js
const client = {
  start:   () => { },
  stop:    () => { },
  restart: () => { },
  debug:   () => { },
};

export default client;
```

```js
// main.js
import { start, stop } from 'api_client';
start();
stop();
```

# ES6 modules - named exports

* So far we've only seen unnamed, `default` exports.
* You can export multiple things per module using named exports.

```js
// utils.js
export function inverseSquareRoot() { }
export function arcTagent() { }
export function rSquared() { }

// main1.js
import { arcTangent } from './utils';
const result = arcTangent(-0.1);

// main2.js
import * as MathUtils from './utils';
const result = MathUtils.arcTangent(-0.1);
```

# Object literal extensions - method shorthand

* Method shorthand:

```js
// ES5
var operations = {
  add: function() { },
  subtract: function() { },
}
```

```js
// ES6+
const operations = {
  add() { },
  subtract() { },
}
```

# Object literal extensions - foo: foo shorthand

* `foo: foo` shorthand:

```js
// ES5:
var user = "abc";
var pass = "def";

var userInfo = {
  user: user,
  password: pass
}
```

```js
// ES6+:
const user = "abc";
const pass = "def";

const userInfo = {
  user,     // infers the key name from the variable name
  password: pass   // be explicit when you want different names
};
```

# Object literal extensions - dynamic property names

* You can now use dynamic values in object property names (keys).

```js
// ES5
function getUserNumber() { return 42; }

var obj = {};
var key = 'user_' + getUserNumber();
Object.defineProperty(obj, key, true);
```

```js
// ES6+:
const getUserNumber = () => 42;
const obj = {
  [ 'user_' + getUserNumber() ]: true
}
```

# Array spread operator - as function arguments

* Allows an array to be expanded in places where multiple arguments are expected

```js
// ES5
function iNeedThreeValues(one, two, three) { }
var threeValues = [1,2,3];

iNeedThreeValues.apply(null, threeValues);
```

```js
// ES6
const iNeedThreeValues = (one, two, three) => { };
const threeValues = [1, 2, 3];

iNeedThreeValues(...threeValues);
```

# Array spread operator - as better array literal

* Allows an array to be expanded in places where multiple arguments are expected

```js
// ES5
const fragment = [4, 5, 6];
const array = [1, 2, 3].concat(fragment).concat([7, 8, 9]);
```


```js
// ES6
const fragment = [4, 5, 6];
const array = [1, 2, 3, ...fragment, 7, 8, 9];
```

# Rest Properties

https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Rest.md

* HERE BE DRAGONS (Stage 2 proposal)
* "Rest properties collect the remaining own enumerable property keys that are not already picked off by the destructuring pattern. Those keys and their values are copied onto a new object."

```js
const attributes = {
  admin: true,
  super_admin: false,
  last_ip: '127.0.0.1',
  created_at: Date.now(),
  modified_at: Date.now(),
}

const { admin, super_admin, ...everythingElse } = attributes;
console.log(admin);  // true
console.log(everythingElse.last_ip);  // '127.0.0.1'
console.log(everythingElse.admin);  // undefined
```

# Spread Properties - merging objects

https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md

* HERE BE DRAGONS (Stage 2 proposal)
* "Spread properties in object initializers copies own enumerable properties from a provided object onto the newly created object."

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj1and2 = { ...obj1, ...obj2 };

console.log(obj1and2); // { a:1, b:2, c:3, d:4 }
```


# Spread Properties - overriding properties

https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md

* HERE BE DRAGONS (Stage 2 proposal)
* Every key/value pair that comes after `...obj` will override what is in `obj`

```js
const user = {
  username: 'jbinto',
  hometown: 'toronto',
  admin: true,
  super_admin: true,
}

const userWithoutAdminPrivs = {
  ...user,
  admin: false,
  super_admin: false
};

console.log(userWithoutAdminPrivs);
```

# Spread Properties - default properties

https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md

* HERE BE DRAGONS (Stage 2 proposal)
* As with the previous example, the last argument "wins ties"

```js
const defaultUserAttributes = {
  isNewUser: true,
  hasSentWelcomeLetter: false,
  logins: 0,
  trialDaysRemaining: 30,
};

const user = {
  username: 'new_user',
  email: 'newuser@example.org'
  logins: 1
};

const userProfile = {
  ...defaultUserAttributes,
  ...user,
};

console.log(userProfile);
```


# Too big and/or honourable mentions

* Classes: Shorthand for `prototype` syntax. Does not make JavaScript object oriented.
* Promises: Alternative to callbacks. Could easily be it's own 2 hour session.
* Generators: Allows a function to pause its execution via `yield`. Enables sophisticated concurrency patterns beyond promises/callbacks.
* Symbols: Just like in Ruby. Immutable, useful for object keys. `Symbol("userid")`
* Object.assign: Copy properties from one object to another. `...` is implemented using this.
* Object.freeze: Makes an object immutable. Writes/deletes will be disallowed.
* Object.keys/Object.values: Returns array of just the keys, or just the values, of a JS object.


# Bonus: Functional programming

A monoid is a set that is closed under an associative binary operation and has an identity element I in S such that for all a in S, Ia=aI=a. Note that unlike a group, its elements need not have inverses. It can also be thought of as a semigroup with an identity element.

A monoid must contain at least one element.

A monoid that is commutative is, not surprisingly, known as a commutative monoid.

Suppose that S is a set and • is some binary operation S × S → S, then S with • is a monoid if it satisfies the following two axioms:

Associativity
* For all a, b and c in S, the equation (a • b) • c = a • (b • c) holds.
Identity element
* There exists an element e in S such that for every element a in S, the equations e • a = a • e = a hold.

In other words, a monoid is a semigroup with an identity element. It can also be thought of as a magma with associativity and identity. The identity element of a monoid is unique.[1] A monoid in which each element has an inverse is a group.

J/K

# Functional programming lite - Pure functions

A pure function is a function that takes one or more inputs, and returns a single output.

If you call a pure function with the same inputs, it will ALWAYS return the same output, regardless of how full your disk is, the status of your network connection, the time of day, or the tide of the moon.

If you call a pure function 50,000 times, it always returns the same thing.

A pure function has NO side effects.

```js
// pure
const double = (x) => x * 2;

// impure
const doubleIfWednesday (x) => {
  (new Date().getDay() == 3) ? (x * 2) : x
}
```

# FP lite - side effects

Anything that is useful in a computer program is a side effect.

Writing to disk, opening a network connection, printing to screen, opening an audio device, sending an email.

These things are useful, but fragile!

Functional programming is all about separating the portions of your logic that are **pure** and those that contain **side effects**.

Consider unit tests: it is trivial to test the `double` function. It is much harder to test that you hit the SendGrid API and turned on an LED on a serial port.

# FP lite - (shared mutable) state

* What is wrong with this program?

```js
let counter = 0; // shared state
const decrement = () => { counter--; }
const increment = () => { counter++; }
```

We can all see why global variables are a bad idea. You can't be sure someone doesn't edit your variable out from underneath you.

Just putting the variable somewhere else is just sweeping it under the rug:

```js
class Counter {
  constructor() { this.counter = 0; }
  increment() { this.counter++; }
  decrement() { this.counter--; }
  __doEvil() { this.counter = "lol"; }
}
```

You can't be sure that `increment()` will even work, because someone could call `__doEvil()`.

# FP lite - functions stand on their own

In functional programming, a principle we stick by is to have each function contain all data it needs in it's argument list.

```js
const decrement = (n) => n-1;
const increment = (n) => n+1;
```

# FP JavaScript code looks different - if

* You'll rarely see an `if` statement. Ternary expressions are preferred, because they can be passed to functions directly as expressions. (You can't put an `if` statement in a function call.)

```js
// non-FP
let value;
if (sortByAscending) {
  value = 1;
} else {
  value = -1;
}
sort(value);

// FP
sort(sortByAscending ? 1 : -1);
```

# FP JavaScript code looks different - for/map

* You'll rarely (never?) see an `for` loop.

* If you're trying to take an array of N elements, and transform it into a different array of N elements, use `map`.

```js
// non-FP
const arr = [1,2,5,10,12];
const isEven = (arr[i] % 2 == 0);
const newArr = []
for (let i = 0; i < arr.length; i++) {
  newArr.push(isEven(arr[i]));
}
console.log(newArr); // [false, true, false, true, true]


// FP
const arr = [1,2,5,10,12];
const isEven = (n) => n % 2 == 0;
const newArr = arr.map(isEven);
console.log(newArr); // [false, true, false, true, true]
```

# FP JavaScript code looks different - for/reduce

* You'll rarely (never?) see an `for` loop.

* If you're trying to take an array of N elements, and transform it into a scalar (a single bool, number, or string), use `reduce`.

* `reduce` is a little tricky at first. Play with it, and it'll become second nature.

```js
// non-FP
const arr = [1,2,5,10,12];
const isEven = (n) => n % 2 == 0;
let allAreEven = true;
for (let i = 0; i < arr.length; i++) {
  allAreEven = allAreEven && isEven(arr[i]);
}
console.log(allAreEven);  // false


// non-FP
const arr = [1,2,5,10,12];
const isEven = (n) => n % 2 == 0;
const allAreEven = arr.reduce((prev, current) => prev && isEven(current), true);
console.log(allAreEven);  // false
```
