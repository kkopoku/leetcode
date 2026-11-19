class HumanBeing {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    doSomething(){
        return "Do Something !!!!!"
    }

}


class OpokuFam extends HumanBeing{

    constructor(middleName){
        super("Kwame", 49)
        this.middleName = middleName
    }

}


let humanName = "Kwame"
let age = 25

let kwame = new HumanBeing(humanName, age)

let kwameAge = kwame.age
let kwameName = kwame.name



function testClosure(){
    let a = 0

    return () => {
        return a++
    }
}


// let oye = new Oopok

// console.log(hey)
var hey = "key"



let pivot = [7,10,43, 1,3,4,5,6,6]

// console.log(pivot.find((x)=> x == 1))
// console.log(pivot.filter((x)=> x > 3))
// console.log(pivot.toSorted((a,b)=>a-b))


for (let x = 0; x <= 5; x++ ) {
    console.log(x)
}