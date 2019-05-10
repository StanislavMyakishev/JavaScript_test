'use strict';
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time, 
    expenses: {
    },
    optionalExpenses: {},
    income: [],
    savings: false
}
let spendings1Name = prompt("Введите обязательную статью расходов в этом месяце");
let spendings2Name = prompt("Введите обязательную статью расходов в этом месяце");
let spendings1Cost = prompt("Во сколько обойдется?");
let spendings2Cost = prompt("Во сколько обойдется?");
appData.expenses.spendings1Name = spendings1Cost;
appData.expenses.spendings2Name = spendings2Cost;
alert(appData.budget/30);