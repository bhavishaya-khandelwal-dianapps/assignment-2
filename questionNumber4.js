//todo --> 4. Real-World Problem
//*    Create a simple Banking System:
//*    Create a BankAccount class with:
//*        a. Properties: accountNumber, accountHolderName, balance.
//*        b. Methods:
//*            i. deposit(amount): Add the amount to the balance.
//*            ii. withdraw(amount): Deduct the amount from the balance if sufficient funds are available.
//*            iii. checkBalance(): Display the current balance.


//* class BankAccount {
//*     // Your code here
//* }
//* const account = new BankAccount(101, "Alice", 1000);
//* account.deposit(500); 
//* console.log(account.checkBalance()); // 1500
//* account.withdraw(200); 
//* console.log(account.checkBalance()); // 1300



class BankAccount {

    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `${amount} rupees deposited successfully`;
    }

    withdraw(amount) {
        if(this.balance < amount) {
            return "Insufficient balance";
        }
        else {
            this.balance = this.balance - amount;
            return "Please collect your money";
        }
    }

    checkBalance() {
        return `Your current balance is ${this.balance}`;
    }

};


const newAccount = new BankAccount(101, "Alice", 1000);
console.log(newAccount.checkBalance());
newAccount.deposit(500);
console.log(newAccount.checkBalance());
newAccount.withdraw(200);
console.log(newAccount.checkBalance());