
// class Wallet{
//     constructor(id, customerName, balance, status){
//         this.id = id
//         this.customerName = customerName
//         this.balance = balance
//         this.status = status
//     }

//     set transfer(amount){
//         this.balance = amount + balance
//     }

//     // transfer(amount){
//     //     console.log(`Transfer starting with current balance ${this.balance}`)
//     //     let total = amount + this.balance
//     //     console.log(`Heres the total ${total}`)
//     //     console.log(`Money is transferred to ${this.customerName} wallet. New balance is ${total}`)
//     // }
// }


// let walletA = new Wallet(1, "Kwame", 100, "Active")
// walletA.transfer = 50
// console.log(walletA.balance)






class Wallet{

    constructor(id, customerName, balance, status){
        this.id = id
        this.customerName = customerName
        this.balance = balance
        this.status = status
    }

    transfer(amount){
        let total = amount + this.balance
        console.log(`Money is transferred from ${this.name} account, and current balance is ${total}`)
    }

    checkFunction(sourceWalletId, beneficiaryWalletId, amount){
        
        if (amount < 0){
            throw new Error("Amount cannot be less than 0")
        }

        //dummy function to check if wallets exist
        function checkWallet(_sourceWalletId){
            return true
        }

        let sourceExists = checkWallet(sourceWalletId)
        let beneficiaryExists = checkWallet(beneficiaryWalletId)

        if(!sourceExists){
            console.log("Source wallet must exist")
            throw new Error("Source wallet must exist")
        }else if(!beneficiaryExists){
            console.log("Beneficiary wallet must exist")
             throw new Error("Beneficiary wallet must exist")
        }


        if(this.status !== "Active"){
            throw new Error("Wallet must be active")
        }

        if(this.balance < amount){
            throw new Error("You have insufficient balance")
        }

        // dummy deduction
        console.log(`GHS${amount} sent to wallet with ID ${beneficiaryWalletId}`)

        return "Transaction sent successfully"
    }
}



let walletA = new Wallet(1, "Kwame", 100, "Active")
walletA.transfer(40)
walletA.checkFunction(1, 3, 50)







