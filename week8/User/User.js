class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
    this.accountBal = 0;
  }

  makeDep(amount) {
    this.accountBal += amount;
    return this;
  }

  makeWith(amount) {
    this.accountBal -= amount;
    return this;
  }

  displayBal() {
    console.log(this.name, this.accountBal);
  }

  transferMoney(otherUser, amount) {
    otherUser.accountBal += amount;
    this.accountBal -= amount;
  }
}

tricia = new User("tricia", "triciadrich@gmail.com");
brian = new User("Brian", "skinny@knowwhere.net");
debbie = new User("debbie", "debbie@gmail.com");
tricia.makeDep(100).makeDep(200).makeDep(300).displayBal();
brian.makeDep(500).makeDep(500).makeWith(200).makeWith(200).displayBal();
debbie.makeDep(10).makeWith(2).makeWith(2).makeWith(2);
tricia.transferMoney(brian, 1000);
brian.displayBal();
tricia.displayBal();
