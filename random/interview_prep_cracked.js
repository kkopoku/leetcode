class Wallet {
  constructor(id, customerName, balance, status) {
    this.id = id;
    this.customerName = customerName;
    this.balance = balance;
    this.status = status;
  }

  checkBalance() {
    console.log(`Checking balance for ${this.customerName}`);
    return this.balance;
  }

  increaseWallet(amount) {
    this.balance += amount;
  }
}

class WalletService {
  checkWallet(walletId) {
    console.log(`Checking if wallet with ID ${walletId} exists`);
    return true;
  }

  transfer(sourceWallet, destinationWallet, amount) {
    console.log(
      `Transfer function is called, sending money from source: ${sourceWallet.customerName} to destination: ${destinationWallet.customerName}`,
    );

    if (amount <= 0) {
      console.log("Amount must be greater than 0");
      throw new Error("Amount cannot be less than 0");
    }

    if (sourceWallet.balance < amount) {
      console.log("Source wallet is less than amount");
      throw new Error("source wallet balance less than amount, please top up");
    }

    let sourceExists = this.checkWallet(sourceWallet.id);
    let destinationExists = this.checkWallet(destinationWallet.id);

    if (!sourceExists || !destinationExists) {
      console.log(
        `${!sourceExists && "Source Wallet does not exist."} ${!destinationExists && "Destination Wallet does not exist"}`,
      );
      throw new Error("Source or destination wallet does not exist");
    }

    if ( sourceWallet.status !== "Active" || destinationWallet.status !== "Active" ) {
      const message = `${sourceWallet.status !== "Active" && "Source wallet is not active"} ${destinationWallet.status !== "Active" && "Destination wallet is not active"}`;
      console.log(message);
      throw message;
    }

    sourceWallet.balance -= amount;
    destinationWallet.balance += amount;

    console.log( `Source wallet new balance: ${sourceWallet.balance} \nDestination wallet new balance ${destinationWallet.balance}` );

    return "Success";
  }
}

let kwameWallet = new Wallet(1, "Kwame Koranteng", 10, "Active");
let godwinWallet = new Wallet(2, "Godwin Hottor", 20, "Active");

let momoService = new WalletService();
momoService.transfer(kwameWallet, godwinWallet, 5);
