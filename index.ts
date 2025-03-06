// index.ts
const message: string = "Hello, TypeScript!";
console.log(message);

let age: number = 25;
console.log(age);

let isActive: boolean = true;
console.log(isActive);

let value: any = "Could be anything";
console.log(value);

let unknownValue: unknown;
console.log(unknownValue);

function logMessage(): void {
    console.log("This function returns nothing");
  }

  let data: null = null;

  let result: undefined = undefined;
  
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

let age: number = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // while loop
  let count: number = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
  