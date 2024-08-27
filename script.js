class Bank {
    constructor() {
        this.total = 100;
    }

    withdraw(name, withdrawal) {
        if (this.total >= withdrawal) {
            this.total -= withdrawal;
            return `${name} withdraws $${withdrawal}. Balance after withdrawal: $${this.total}`;
        } else {
            return `${name}, you cannot withdraw $${withdrawal}. Insufficient funds. Your balance is: $${this.total}`;
        }
    }

    deposit(name, deposit) {
        this.total += deposit;
        return `${name} deposits $${deposit}. Balance after deposit: $${this.total}`;
    }

    checkBalance(name) {
        return `${name}, your current balance is: $${this.total}`;
    }
}

const bank = new Bank();

function getInputValue(id) {
    return document.getElementById(id).value;
}

function displayMessage(message) {
    document.getElementById('message').innerText = message;
}

function updateBalanceDisplay() {
    document.getElementById('balance-display').innerText = `Balance: $${bank.total}`;
}

function deposit() {
    const name = getInputValue('name');
    const amount = parseInt(getInputValue('amount'), 10);
    if (!name) {
        displayMessage('Please enter your name.');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        displayMessage('Please enter a valid deposit amount.');
        return;
    }
    const message = bank.deposit(name, amount);
    displayMessage(message);
    updateBalanceDisplay();
}

function withdraw() {
    const name = getInputValue('name');
    const amount = parseInt(getInputValue('amount'), 10);
    if (!name) {
        displayMessage('Please enter your name.');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        displayMessage('Please enter a valid withdrawal amount.');
        return;
    }
    const message = bank.withdraw(name, amount);
    displayMessage(message);
    updateBalanceDisplay();
}

function checkBalance() {
    const name = getInputValue('name');
    if (!name) {
        displayMessage('Please enter your name.');
        return;
    }
    const message = bank.checkBalance(name);
    displayMessage(message);
}
