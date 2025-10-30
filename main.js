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