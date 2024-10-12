class BankAccount {
  // NOTE: encapsulation is achieved by making the properties private
  private accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  public withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
}

const account = new BankAccount("123456789", 1000);

console.log("Account Number:", account.getAccountNumber());
console.log("Balance:", account.getBalance());

account.deposit(500);
account.withdraw(200);
account.withdraw(1500);
