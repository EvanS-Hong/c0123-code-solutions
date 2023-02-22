/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
  };


Bank.prototype.openAccount = function(holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var openedAccount = new Account(this.nextAccountNumber, holder);
    var totalBalance = new Transaction('deposit', balance)
    openedAccount.deposit(balance);
    this.accounts.push(openedAccount);
    var currentAccount = this.nextAccountNumber;
    this.nextAccountNumber += 1;
    return currentAccount;

  } else {
    return null;
  }
};

Bank.prototype.getAccount = function(entry) {
  for (i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === entry) {
    return this.accounts[i];
    }
    } return null;
  }


Bank.prototype.getTotalAssets = function() {
  var total = 0;
  var newTotal = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i ++) {
      total += this.accounts[i].getBalance();
    }
  }
  return total;
}
