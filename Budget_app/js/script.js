let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudget = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optExpenses = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavings = document.getElementsByClassName("monthsavings-value")[0],
    yearSavings = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optExpensesItemBtn = document.getElementsByTagName('button')[1],
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    countBudgetBtn = document.getElementsByTagName('button')[2],
    chooseIncome = document.querySelector('.choose-income'),
    savingsCheck = document.querySelector('#savings'),
    summField = document.querySelector('.choose-sum'),
    percentField = document.querySelector('.choose-percent'),
    yearField = document.querySelector('.year-value'),
    monthField = document.querySelector('.month-value'),
    dayField = document.querySelector('.day-value'),
    money,time, sum = 0;

startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearField.value = new Date(Date.parse(time)).getFullYear();
    monthField.value = new Date(Date.parse(time)).getMonth() + 1;
    dayField.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }
        }
        expensesValue.textContent = sum;
    }
});

optExpensesItemBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        for (let i = 0; i <= optExpensesItem.length; i++) {
            let opt = optExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optExpenses.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
        levelValue.textContent = ("Минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = ("Средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = ("Высокий уровень достатка!");
    } else {
        levelValue.textContent = ("Ошибочка...!");
    }
    } else {
        dayBudget.textContent = "Ошибочка...!";
    }
});

chooseIncome.addEventListener('input', function() {
    if (appData.budget != undefined) {
        let items = chooseIncome.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    }
});

savingsCheck.addEventListener('click', function() {
    if (appData.budget != undefined) {
        if (appData.savings == true){
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    }
});

summField.addEventListener('input', function() {
    if (appData.budget != undefined) {
        if (appData.savings == true){
            let sum = +summField.value,
                percent = +percentField.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

percentField.addEventListener('input', function() {
    if (appData.budget != undefined) {
        if (appData.savings == true){
            let sum = +summField.value,
                percent = +percentField.value;
                
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};