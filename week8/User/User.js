class User {
  constructor(username, email){
    this.name = username
    this.email = email
    this.accountBal = 0
  }

   makeDep(amount){
     this.accountBal += amount
   }

   makeWith(amount){
     this.accountBal -= amount
   }

   displayBal(){
     console.log(this.name, this.accountBal)
   }

   transferMoney(otherUser, amount){
     otherUser.accountBal += amount
     this.accountBal -= amount
   }
}

tricia = new User("tricia", "triciadrich@gmail.com");
brian = new User ("Brian", "skinny@knowwhere.net");
debbie = new User("debbie", "debbie@gmail.com")
tricia.makeDep(100);
tricia.makeDep(200);
tricia.makeDep(300);
tricia.displayBal();
brian.makeDep(500);
brian.makeDep(500);
brian.makeWith(200);
brian.makeWith(200);
brian.displayBal();
debbie.makeDep(10);
debbie.makeWith(2);
debbie.makeWith(2);
debbie.makeWith(2);
tricia.transferMoney(brian, 1000);
brian.displayBal();
tricia.displayBal();