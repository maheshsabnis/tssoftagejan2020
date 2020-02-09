ES 6 Features
1. Scope definition
2. DataTypes
3. Collections
4. Template String
5. Arrow Operator
6. DeStructuring
7. Object Oriented Programming
8. Modules
9. Promises
==============================================================================================
ES 6 Languages
1. High-Level JavaScript aka Modern JavaScript aka ES 6
   1. React.js, Redux, Vue.js
2. TypeScript
   1. Angular
3. Dart

==============================================================================================

TypeScript Language Features, https://www.typescriptlang.org     

1. Scope definition
   1. The 'let' keyword used to define a scope of vaiable in a block
2. DataTypes
   1. number --> integer and floating-point values
   2. string --> string data type and string object, having access to string methods
   3. object
      1. methods
         1. assign() --> cloaning the object
         2. rest parameters
            1. ... like params keyword in C#
   4. date
   5. boolean
   6. Array --> [] datatype and Array object,  having access to array methods
   7. type --> type of the declaration
   8. void --> not return anything
   9.  any --> late binding
   10. union types --> variable will be declared with more than one data type but fix data types, no-late-binding
3. Collections  
   1. Array<T>
      1. properties
         1. length
      2. methods    
         1. push(), pop()
         2. iteration methods
            1. foreach(), map()
         3. array manipulation methods
            1. find() --> ES 6 JavaScript and not directly in TS
            2. filter() --> returns an array based on condition
            3. indexOf() --> Index of an element in array
            4. splice() --> remove an element from array
            5. slice() --> divide an array into multiple arrays
            6. shift() and unShift() --> index based array adjustment
   2. Set with WeakSet (ES 6 in JavaScript, but community TS implementation)
   3. Map with WeabMap (ES 6 in JavaScript, but community TS implementation)
4. itarations aka loops
   1. for..loop
   2. for..in --> simplification of for..loop
   3. for..of loop --> real iteration in ES 6
   4. while and do..while 
5. Template String
   1. Known as HTML parsed strings
   2. Expression based string concatinations
6. Arrow Operator
   1. like Lambda expression =>
   2. used when a function accepts callback as input parameter
7. DeStructuring
   1. syntax for object creations
   2. used for array index definitions
8. Object Oriented Programming
   1. class
      1. Access Specifiers
         1. public --> default for class members
         2. private
         3. protected
      2. constructor
         1. constructor() is a method
            1. parameterized ctor
            2. private ctor parameters --> scoped to ctor and class
            3. public ctor parameters ---> scoped to ctor, class and like public data memebrs of class
      3. access modifiers
         1. static
            1. methods
   2. inheritence
         1. extends keyword
         2. no ocerloading
         3. no overrriding
   3. interface
         1. uses implements keyword
   4. Generics
      1. Class, interface, members and method 
9.  Modules
    1.  Used for code-splitting e.g. namespaces
    2.  export is a keyword to export class, interface, array and function as a module
    3.  import is a keyword to import exported declarations 
10. Promises 
    1.  Async and await

===============================================================================================
Installing TypeScript

npm install -g typescript command

npm is Node-Package-Manafger, the tools installed with Node.js --> https://www.nodejs.org   

-g is in global scope (machine scope)

npm install -g typescript command will provide the 'tsc' Command line tool

The 'tsc' tool traspiles(?) the TypeScript into JavaScript

traspiler --> Transformation with Compilation

e.g. tsc <FILENAME>.ts --> generates <FILENAME>.js

To execute <FILENAME>.js on Node.js server run the following command

node <FILENAME>.js
