
class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);
account.displayBalance();