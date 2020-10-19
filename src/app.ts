// Interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Rafly",
  age: 18,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent,", amount);
    return amount;
  },
};
const greatPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};
greatPerson(me);

console.log(me);
import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("Luigi", "work on the luigi website", 750);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
const a = 1;
const b = 2;
const total = a + b;
console.log(total);

});
