let billEl = document.querySelector("#bill");
let noOfPeopleEl = document.querySelector("#people");
let tipPercentages = document.querySelectorAll(".cl-tip");

let billAmount = 0;
let noOfPeople = 0;

billEl.addEventListener("keyup", (e) => {
 billAmount = Number(e.target.value);
 calculateTip();
});

noOfPeopleEl.addEventListener("keyup", (e) => {
 noOfPeople = Number(e.target.value);
 calculateTip();
});

console.log(tipPercentages);