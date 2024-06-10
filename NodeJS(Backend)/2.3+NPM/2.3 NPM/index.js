//npm=node package manager
//$ npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (2.3+npm) learning-npm
// version: (1.0.0)
// description: i am learning about NPM.
// entry point: (index.js)                                                    
// test command:
// git repository:                                                            
// keywords:
// author: HArsh Wagh
// license: (ISC)                                                             
// About to write to C:\Users\Harsh\Downloads\2023 CSS Bootcamp\NodeJS(Backend)\2.3+NPM\package.json:

// {
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "HArsh Wagh",
//   "license": "ISC"
// }


// Is this OK? (yes) y

// var generateName = require('sillyname');
// import generateName from "sillyname"
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

import superheroes from "superheroes";
const name = superheroes.random();
console.log(`my Name is ${name}`);
