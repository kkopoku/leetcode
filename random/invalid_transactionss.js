/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const transactionData = transactions.map((transaction) => {
    const [name, time, amount, city] = transaction.split(",");
    return {
      name,
      time: parseInt(time),
      amount: parseInt(amount),
      city,
      original: transaction,
      flagged: false,
    };
  });

  const invalid = new Array();
  const nameToTransactions = new Map();

  for (const transaction of transactionData) {
    if (!nameToTransactions.has(transaction.name)) {
      nameToTransactions.set(transaction.name, []);
    }
    nameToTransactions.get(transaction.name).push(transaction);
  }

  for (const [name, group] of nameToTransactions) {
    const sortedTransactions = group.sort((a, b) => a.time - b.time);

    for (let i = 0; i < sortedTransactions.length; i++) {
      const current = sortedTransactions[i];

      if (current.amount > 1000 && !current.flagged) {
        invalid.push(current.original);
        current.flagged = true;
        continue;
      }

      for (let j = i - 1; j >= 0; j--) {
        const previous = sortedTransactions[j];

        if (previous.amount > 1000 && !previous.flagged) {
          invalid.push(current.original);
          previous.flagged = true;
        }

        if (current.time - previous.time > 60) {
          break;
        }

        if (current.city !== previous.city) {
          if (!current.flagged) {
            invalid.push(current.original);
            current.flagged = true;
          }
          if (!previous.flagged) {
            invalid.push(previous.original);
            previous.flagged = true;
          }
        }
      }

      for (let k = i + 1; k < sortedTransactions.length; k++) {
        const next = sortedTransactions[k];

        if (next.amount > 1000 && !next.flagged) {
          invalid.push(next.original);
          next.flagged = true;
        }

        if (next.time - current.time > 60) {
          break;
        }

        if (next.city !== current.city) {
          if (!current.flagged || current.amount > 1000) {
            invalid.push(current.original);
            current.flagged = true;
          }
          if (!next.flagged) {
            invalid.push(next.original);
            next.flagged = true;
          }
        }
      }

    }
  }
  return invalid;
};

const data = [
  "bob,627,1973,amsterdam",
  "alex,387,885,bangkok",
  "alex,355,1029,barcelona",
  "alex,587,402,bangkok",
  "chalicefy,973,830,barcelona",
  "alex,932,86,bangkok",
  "bob,188,989,amsterdam",
];

const result = invalidTransactions(data);
console.log(result);
