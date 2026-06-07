export class BankAccount {

    balance: number;

    constructor(balance: number, readonly owner: string) {
        this.balance = balance;
        this.owner = owner;
    }
    
   deposit(amount: number): void{
        this.balance += amount;
   }
}

