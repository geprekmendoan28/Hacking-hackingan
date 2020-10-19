var me = {
    name: "Rafly",
    age: 18,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent,", amount);
        return amount;
    },
};
var greatPerson = function (person) {
    console.log("hello", person.name);
};
greatPerson(me);
console.log(me);
import { Invoice } from "./classes/invoice.js";
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("Luigi", "work on the luigi website", 750);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector(".new-item-form");
// Inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
