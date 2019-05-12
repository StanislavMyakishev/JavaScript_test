'use strict';
let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    budget: money,
    timeData: time, 
    expenses: {
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null 
        && (typeof(b)) === null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b; //key value pair
        console.log(i);
    } else {
        console.log(i);
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Минимальный уровень зароботка");
} else if (appData.moneyPerDay < 2000){
    console.log("Средний уровень зароботка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень зароботка");
} else {
    console.log("Уровень зароботка неопределен");
}
