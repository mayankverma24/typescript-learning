import { BankAccount } from "./sample.class";



// const myAccount = new BankAccount(1000, "John Doe");
// myAccount.deposit(4000);
// console.log(myAccount.balance); // Output: 5000


export class UsageClass extends BankAccount {

    constructor(balance: number, owner: string) {
        super(balance, owner);
    }

    displayAccountInfo(): void {
        console.log(`Owner: ${this.owner}\nBalance: ${this.balance}`);
    }

}

const myAccount = new UsageClass(1000, "John Doe");
myAccount.deposit(4000);
myAccount.displayAccountInfo(); // Output: Owner: John Doe, Balance: 5000


class ProfilePage {

    constructor(public username: string, public age: number) {
        this.username = username;
        this.age = age;
    }
}