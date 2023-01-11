
//Explicit type declaration
export let myFirstName: string = "Chris";
export let myAge: number = 19;
export let lies: boolean = false;
export let diff: (string | number) = "the boy";
diff = 9;  // it works (note: | == OR)

//Implicit type declaration;
export let myLastName = "Chris";
export let myStreet = 18;

// Arrays
export let myArray: string[] = ["boy", myFirstName];

export let myArrayOne: (string | number | boolean)[] = ["girl", 76, true]

export let myArrayTwo: readonly (string | number | boolean)[] = ["girl", 76, true];
//myArrayTwo.push('tola') /* will throw error */

// Objects
export const myObject = {
    firstName: "enyia",
    "lastName": "chidi"
}
// adding ? makes the property optional
const myObjectTwo: { tolu: string, goke?: string, olu?: number } = {
    tolu: "goke"
}
myObjectTwo.goke = "hd";
myObjectTwo.goke = "christiano"
myObjectTwo.olu = 9

// Another way of declaring an Object
const myObjectThree: { [index: string]: (number | string) } = {
    ismail: 19,
    uche: "jldgj"
}

// Alias  /* Initiated with "type" */
type myNum = number;
type myString = string;

const tryAliasNum: myNum = 8;
// const tryAliasString: myString = 8;      /* Throws error */

// Interface works only for objects
interface myObjectType {
    width: number,
    height: number,
    name: string
}

interface myObjectTypePlus extends myObjectType {
    color: string
}

const myShapeObject: myObjectTypePlus = {
    name: "Chris Rectangle",
    width: 45,
    height: 20,
    color: "blue"
}

// Functions
function myFirstFun(): string {
    return "boy " + "90"
}

// Any type means that the function can return any type of data
function mySecondFun(a: number = 6, b: number = 9, c?: string): any {
    const ans = a + b
    return ans;
}
mySecondFun()                       /* Works because the "?" made 'c' optional */

type myAliasFun = (value: number, valueTwo?: boolean) => any;

const myThirdFun: myAliasFun = (value, valueTwo) => {
    if (valueTwo) {
        return value;
    }

    return value ** 2;
}
myThirdFun(6, true)                 /* Works because the "?" made 'valueTwo' optional */;


// Casting
let myX: unknown = "hello"         /* "unknown" is a type that can hold any type of data */
console.log(myX as string);       /* Casting "myX" to a string */

let myY: any = "hello there"
// console.log(myY as string);

let myZ: unknown = "hello there one"
// console.log((myZ as number).length);             /* Throws error because "myZ" still holds a string */


// CLASSES WITH VISIBILITY
/*
** Private - data can ONLY be accessed WITHIN the class;
** Public - data can be accessed from ANYWHERE;
** PROTECTED - data can be accessed from WITHIN the class and Other Classes that INHERITED from it;
 */

class Person {
    // protected readonly age: number;
    // private name: string;
    // protected myName?: string;

    protected readonly age;
    private name;
    protected myName;

    public constructor(ag: number, nam: string, me?: string) {
        this.age = ag;
        this.name = nam;
        this.myName = me;
    }

    public setName(): string {
        return this.myName = "Ukeme"
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }
}
const myOwn = new Person(18, "Chris");
console.log(myOwn.getName() + " " + myOwn.getAge() + " " + myOwn.setName());

// Abstract is a class that can only be inherited from and not instantiated and is used to create a template for other classes
abstract class Shapes {
    public abstract toNumber(): number

    public ourNumber: number = 500;

    public toString(): string {
        return `Calculation is = ${this.ourNumber}`
    }
}

class myShapes extends Shapes {
    public constructor(protected height: number, protected width: number) {
        // super() is used to call the constructor of the parent class
        super();
    }

    toNumber() {
        return this.height + this.width
    }

    // Override the toString Method in Shapes Class
    public override toString(): string {
        return `answer is = ${this.toNumber()}`
    }
}
const myAnClass = new myShapes(5, 3);
console.log(myAnClass.toString())


// Generics
function myGenerics<T, S>(a: T, b: S): any {
    return [a, b]
}
console.log(myGenerics<number, string>(5, "works"))

// Generic with Alias
type wrap<T> = { ans?: T, verdict?: T }
const myWrap: wrap<number> = { ans: 9 }
console.log(myWrap)
const myBWrap: wrap<boolean> = { verdict: true }
console.log(myBWrap)

type awrap<T = string> = { ans: T }
const myAWrap: awrap = { ans: "9" }
console.log(myAWrap)

// Utility Types
/*
** Partial - Changes all the properties of an object to be optional
** Required - Changes all the properties of an object to be required
** Record - is a shortcut for determining an object type with a specific key and value type
** Omit - removes keys from an object type
** Pick - removes all but the specified key from an object type
** Exclude - removes specific type from a Union
** ReturnType - extracts the return type of a function
** Parameters - extracts the type of a function parameters
*/

interface myUtil {
    name: string,
    age: number,
    school: string
}

const myNewUtil: Partial<myUtil> = {};

// const anyNewUtil: Required<myUtil> = {}                  /* Throws an error */

const amyNewUtil: Omit<myUtil, "name"> = {
    age: 8,
    school: "OAU"
}


// Nullish Coalescence and Optional Chaining
function myNull(para: string | null | undefined): any {
    // if para is null or undefined, it will print "invalid para"
    console.log(`para is ${para ?? "Invalid Para"}`)
}
myNull("chris");         /* Prints "para is 'chris'" */
myNull(null)            /* Prints "para is 'invalid para'" */

interface myChain {
    age?: number,
    name?: {
        firstname: string,
        lastname?: string
    }
}
function myChainFun(para: myChain) {
    const myPara = para.name?.firstname;

    if (myPara === undefined) {
        console.log(`age is ${ para.age ?? "name is undefined but"}`)
    } else {
        console.log(`Name is valid and is ${para.name?.firstname} ${para.name?.lastname}`)
    }
}
let cc: myChain = {
    age: 5,
}
let cca: myChain = {
    age: 5,
    name: {
        firstname: "chris",
        lastname: "ukeme"
    }
}
let ccb: myChain = {
    age: 5,
    name: {
        firstname: "chris"
    }
}
myChainFun(cc);             /* Prints "name is undefined" */
myChainFun(cca);            /* Prints "name is valid and is chris ukeme" */
myChainFun(ccb);            /* Prints "name is valid and is chris undefined" */
