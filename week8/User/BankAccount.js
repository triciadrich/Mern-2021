class BankAccount{
  constructor(intRate, bal){
    if(bal && intRate > 0){
      this.intRate = intRate
      this.bal = bal
    }
    this.bal = 0
    this.intRate = .01
  }

  deposit(amount){
    this.bal += amount;
    return this;
  }

  withdraw(amount){
    if(this.bal < this.amount){
    this.bal -= amount;
    return this;
    }
    this.bal -= 5;
    console.log("Insufficient funds: Charging a $5 fee");
    return this
  }

  displayAccount(){
    console.log("balance " + this.bal);
    return this;
  }

  yield(){
    if (this.bal > 0){ 
    this.irt = this.bal * this.intRate;
    this.bal += this.irt;
    return this;
  }
   console.log("must have a positive balance!")
  }
}

acct1 = new BankAccount()
acc2 =  new BankAccount()

acct1.deposit(200).deposit(300).deposit(200).yield().displayAccount()
acc2.deposit(200).deposit(200).withdraw(200).withdraw(100).withdraw(200).withdraw(200).yield().displayAccount();