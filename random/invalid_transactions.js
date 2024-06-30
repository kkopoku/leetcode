//A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]

/**
 * @param {string[]} transactions
 * @return {string[]}
 */

// sort transactions by name
// check if transaction amount exceeds $1000
// check for transactions with the same name
// check if time difference is <= 60 mins

var invalidTransactions = function (transactions) {
  // create list of transaction objects
  var transactionData = transactions.map((transaction) => {
    const [name, time, amount, city] = transaction.split(",");
    return {
      name: name,
      time: parseInt(time),
      amount: parseInt(amount),
      city: city,
      original: transaction
    };
  });

  // group transactions by name
  const transactionByName = new Map();

  // check if transaction is already in the map
  for (const transaction of transactionData) {
    // if its not in the map, add it
    if (!transactionByName.has(transaction.name)) {
      transactionByName.set(transaction.name, []);
    }
    // add transaction to the list of the transaction under the name
    transactionByName.get(transaction.name).push(transaction);
  }

//   set to store invalid transactions
const invalidTransactions =  new Set()

for (const [name, transactionByNameArray] of transactionByName){
    // iterate through transaction of the same name
    for (let i=0; i<transactionByNameArray.length; i++){
        const current = n[i];

        // if amount is greater than 1000 add to invalid transactions
        if (current.amount > 1000) {
            invalidTransactions.add(current.original)
            continue
        }

        let isInvalid = false

        // compare transaction with other transactions in the same group
        for (let j = 0; j < transactionByNameArray.length; j++){
            // check if we are on current transaction before comparing
            if (i!==j){
                const other = transactionByNameArray[j]
                // check if time difference is <= 60 mins and cities are different
                if ( (Math.abs(current.time - other.time) <= 60) && (current.city !== other.city) ) {
                    isInvalid = true
                    break;
                }
            }
        }

        if (!isInvalid){
            invalidTransactions.add(current.original)
        }

    }

    return Array.from(invalidTransactions)

}

};

const data = [
  "carol,45,300,san francisco",
  "alice,50,100,beijing",
  "bob,80,900,chicago",
  "carol,5,1500,los angeles",
  "bob,10,1200,seattle",
  "alice,20,800,mtv",
  "carol,45,300,san francisco",
  "alice,50,100,beijing",
  "bob,80,900,chicago",
  "carol,5,1500,los angels",
  "bob,10,1200,seattle",
  "alice,20,800,mtv",
];

console.log(invalidTransactions(data))
