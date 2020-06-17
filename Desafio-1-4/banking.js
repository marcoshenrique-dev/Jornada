
/*
      Challenge 8 of module in Introduction for Web

      Curso : Launch Base gives Rocktseat 🤩

      Details : Banking operations

*/

const user = {

  name: "Marcos",
  transactions: [],
  balance: 0

}

function createTransition(object) {

  user.transactions.push(object)

  if (object.type === 'credit') {

    user.balance += object.value

  } else if (object.type === 'debit') {

    user.balance -= object.value

  }

}

function getHigherTransactionByType(type) {

  let current = 0
  let objectMax = {}
  let max = 0

  for (let get of user.transactions) {


    if (type === get.type && get.value > current) {
      objectMax.type = get.type
      objectMax.value = get.value
      max = get.value
    }


    current = get.value


  }


  return objectMax

}

function getAverageTransactionValue() {

  let values = 0

  for (let get of user.transactions) {

    values += get.value
  }

  return values / user.transactions.length
}

function getTransactionsCount() {

  let count = {

    credit: 0,
    debit: 0

  }

  for (let get of user.transactions) {

    if (get.type === 'debit') {

      count.debit++

    }
    if (get.type === 'credit') {

      count.credit++

    }

  }

  return count

}



createTransition({ type: 'credit', value: 200 })
createTransition({ type: 'debit', value: 100 })

console.log(getAverageTransactionValue()); //150

console.log(getHigherTransactionByType('credit')); // { type : 'credit', value : 200 }

console.log(getTransactionsCount()); // {credit : 2 , debit :0 }

