class Wallet {

    constructor (name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.amount = 0
    }


    creditWallet(amount){
        this.amount += amount
    }

    debitWallet(amount){
        this.amount -= amount
    }

}



class TransferService {

    constructor(sourceWallet, destinationWallet){
        this.sourceWallet = sourceWallet
        this.destinationWallet = destinationWallet
    }

    transfer(amount){

        if(this.sourceWallet.amount < amount){
            console.log("Source wallet has insufficient balance")
            return
        }

        console.log("Transferring money from ", this.sourceWallet.name, " to ", this.destinationWallet.name);
        this.sourceWallet -= amount
        this.destinationWallet += amount
    }

}



let kwameWallet = new Wallet("Kwame K Opoku", 25, "kk.opoku@outlook.com")
kwameWallet.creditWallet(10000)

let ianWallet = new Wallet("Ian Seshie", 24, "ianali@gmail.com")

let KKOTransferService = new TransferService(kwameWallet, ianWallet)
KKOTransferService.transfer(10)

console.log("Ian's wallet balance is: ", ianWallet.amount)