let balance = 1000;


function showBalance(){
    console.log(`Ваш баланс: ${balance} рублей`)
}


function withdrawMoney() {  
    let amount = parseInt(prompt("Введите сумму для снятия:"));  
      
    if (isNaN(amount) || amount <= 0) {  
        console.log("Некорректная сумма!");  
        return;  
    }  
      
    if (amount > balance) {  
        console.log("Недостаточно средств на счете!");  
    } else {  
        balance -= amount;  
        console.log(`Успешно снято ${amount} рублей.`);  
        showBalance();  
    }  
}


function depositMoney() {  
    let amount = parseInt(prompt("Введите сумму для пополнения:"));  
      
    if (isNaN(amount) || amount <= 0) {  
        console.log("Некорректная сумма!");  
        return;  
    }  
      
    balance += amount;  
    console.log(`Успешно внесено ${amount} рублей.`);  
    showBalance();  
}
while (true) {  
    console.log("\nМеню банкомата:");  
    console.log("1. Проверить баланс");  
    console.log("2. Снять деньги");  
    console.log("3. Пополнить счет");  
    console.log("4. Выйти");  
      
    let choice = prompt("Выберите действие:");  
      
    switch(choice) {  
        case '1':  
            showBalance();  
            break;  
        case '2':  
            withdrawMoney();  
            break;  
        case '3':  
            depositMoney();  
            break;  
        case '4':  
            console.log("До свидания!");  
            process.exit(); // Выход из программы  
            break;  
        default:  
            console.log("Неверный выбор. Попробуйте еще раз.");  
    }  
}      