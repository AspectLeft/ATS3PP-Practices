# Learning Advanced-TypeScript-3-Programming-Projects

Practices on reading the book [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/application-development/advanced-typescript-3-programming-projects?utm_source=github&utm_medium=repository&utm_campaign=)

## Chapter 1

Some TypeScript features, including

+ Union types
+ Intersection types
+ Mixins
+ Decorators
+ ...

And a introduction to Bootstrap.

## Chapter 2

![ch02](ch02.png)
A simple Markdown editor, supporting

+ h1 to h6
+ hr, and p

I also added an escaping function to prevent injecting HTML codes.

### How to run

Under `ch02` folder, run command

```shell script
npm install typescript --save-dev
tsc
```

Then deploy `index.html` and `script/` to anywhere you like.
I just used the simple local host in WebStorm.

## Chapter 3

![ch03](ch03.png)
A React Bootstrap Personal Contacts Manager, including

+ A form with validations
+ A list of entities
+ IndexedDB for local storage

## Chapter 4

![ch04](ch04.png)
A MEAN Photo Gallery, including

+ Angular frontend, with Material
+ Node.js backend, with Express.js
+ MongoDB to store the pictures
