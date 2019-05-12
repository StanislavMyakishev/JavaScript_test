'use strict';
let money, time; 
function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
        if ( (typeof(a))=== 'string' && (typeof(a)) != null 
            && (typeof(b)) === null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b; //key value pair
            console.log(i);
        } else {
            //i = i - 1;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Бюджет на день: " + appData.moneyPerDay);
}

function detectLevelOfIncome(){
    if (appData.moneyPerDay < 100){
        console.log("Минимальный уровень зароботка");
    } else if (appData.moneyPerDay < 2000){
        console.log("Средний уровень зароботка");
    } else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень зароботка");
    } else {
        console.log("Уровень зароботка неопределен");
    }    
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a  = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = a;
    }
}