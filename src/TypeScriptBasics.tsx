function TypeScriptBasics() {

    // string
    let name: string;
    name="Mohit";
  
    // number
    let age: number;
    age=21;
  
    // boolean
    let isMohit: boolean;
    isMohit=true;
  
    // Array with string
    let partners: string[];
    partners=["Mohit", "Bhakti"];
  
    // Array with numbers
    let ages: number[];
    ages=[21, 20];
  
    // tuples
    let user: [string, number];
    user=["Mohit", 21];
  
    // If we want to 2 data type for a same variable, then we use | Union |
  
    let newAge: number | string;   
  
    // Object
    // let person: Object; // not recommended
  
    type Person = {
      name: string,
      age?: number
    }
  
    // whenever using any name for type, always prefer Capital [ ex: Person ]
  
    let person: Person = {
      name: "Mohit",
    }; // This is recommended
  
    // Array of Objects [ ex: Person ]
  
    let lotsOfPeople: Person[];
  
    // Functions
  
    function printName(name: string){
      console.log(name)
    }
  
    printName("Mohit");
  
    // How to declare a function
  
    let newFunction: (name: string) => void; // A function that is returning nothing.
    let newFunction2: (name: string) => number; // A function that is returning number.
    let newFunction3: (name: string) => string; // A function that is returning string.
  
    // any type: use in variables when we want any data type ( whether its string, number or any other ).
  
    let notRecommonded: any; // not recommended to because then what is the meaning of using TS over JS
  
    // unknown -> if we don't know which type our variable is going to be, then we use this.
  
    let randomData: unknown;
  
    // if we don't know what a function is going to return, then we use
  
    let newFunction4: (name: string) => never;
  
    // difference between void and never
  
    // void returns undefined, but never doesn't return anything.
  
    // Alias in a simple language
  
    /* Imagine you have a friend named John, but sometimes you like to call him "Johnny" 
    because it's a shorter and more fun name. In TypeScript, an alias is a bit like giving 
    your friend a nickname or another name that you can use to refer to them. In TypeScript, 
    we often work with different types of data, like numbers, text, and more. Sometimes these 
    types have long and complicated names, like "number" or "string." But just like with your 
    friend John, we can give these types shorter and easier names, or aliases, to make our code 
    easier to read and write. For example, instead of saying "let age: number = 10;", we can use 
    an alias like this: "type Age = number; let age: Age = 10;". Now, whenever we want to talk 
    about a person's age, we can use "Age" instead of "number" to make our code more clear and 
    fun to work with. So, in TypeScript, an alias is like a nickname for types, making our code 
    simpler and easier to understand. */
  
    // SO there are 2 types of Alias: type & interface
  
    // type
  
    type X = {
      a: string,
      b: number,
    }
  
    // type can be extended like this.
    
    type Y = X & {
      c: string,
      d: number,
    }
    
    let y: Y = { 
      a: "Bhakti",
      b: 20,
      c: "Mohit",
      d: 21,
    }
    
    // interface
    
    interface newUser {
      name: string, 
      age: number,
    }
  
    // interface can be extended like this.
    
    interface extraDetails extends newUser{
      profession: string,
    }
  
    // We can also extends like this
  
    // interface newUser  extends X {
    //   name: string, 
    //   age: number,
    // }
  
    // type X = newUser & {
    //   c: string,
    //   d: number,
    // }
  
    
  
  
    return (
      <>
        <h1>Hello World!</h1>
      </>
    )
  }
  
  export default TypeScriptBasics
  
  
  // Also read the Typescript handbook form the typescript documentation.