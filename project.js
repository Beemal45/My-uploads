//document.getElementById("count-here").innerText = 5
// let firstBatch= 5
// let secondBatch= 3
// let count= firstBatch + secondBatch

// console.log(count)
//let myAge= 24
//let humanDogRatio= 7
//let myDogAge= myAge * humanDogRatio
// console.log(myDogAge) 

/*let bonusPoints= 50
bonusPoints= bonusPoints+50
bonusPoints= bonusPoints-75
bonusPoints= bonusPoints+45

console.log(bonusPoints)*/

/*function increment() {
  console.log("The button was clic")
}*/

/*function display() {
    console.log(42)
}
display()*/

/*let lap1= 34
let lap2= 33
let lap3= 36
function timeTaken() {
 console.log(lap1+lap2+lap3)
}
timeTaken()*/

/*let lapsCompleted= 0
function incrementLap() {
    lapsCompleted= lapsCompleted+1
}
incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)*/

let countHere = document.getElementById("count-here")
let saveEl= document.getElementById("save-el")

//console.log(countHere)

let count= 0
function increment() {
    count+= 1
    countHere.innerText= count
    console.log(count)
    }
    
function save() {
    let countDash= count+ " - "
    saveEl.textContent+= " "+ countDash
    countHere.innerText= 0
    count= 0
    console.log(count)
    }
   
/*let message= "You have three new notifications"
let username = "per"
console.log(message + ", " + username + "!")

let messageToUser= message + ", " + username + "!" 
console.log(messageToUser)*/

/*[Concatenating multiple variables into one.]
let name= "Bimal"
let greeting= "Hi, my name is"
let myGreeting= greeting +" "+ name+"."

console.log(myGreeting)*/

/*let welcomeEl= document.getElementById("welcome-el")
let name= " Bimal"
let greeting= "Welcome back"

welcomeEl.innerText= greeting+name
welcomeEl.innerText+= " !" */ // '+=' is a shortcut for adding a value to pre-existent "welcomeEl.innerText" variable.

//recap
/*let firstName = "Bimal"
let lastName= " Chalise"
let fullName= firstName+lastName
console.log(fullName)*/

/*let name= "Linda"
let greeting= "Hi there"
function call() {
    console.log (greeting+","+" " + name +"!")
}
call()*/

/*let myPoints= 3
function add3Points() {
    myPoints+= 3
    }
function remove1Point() {
    myPoints+= -1
    }
add3Points()
remove1Point()
add3Points()
remove1Point()
add3Points()
console.log(myPoints)*/

/*let error= document.getElementById("error")
    function errorMsg() {
    error.textContent= "Something went wrong, please try again"    
    console.log (error)
}*/

//Calculator
let num1= 8
let num2= 2
document.getElementById("num-el").textContent= num1
document.getElementById("num2-el").textContent= num2
let result= document.getElementById("result")
function add() {
    let addition= num1 + num2
    result.textContent= "Result:" +" " + addition
    console.log(addition)
}
function substract() {
    let substraction= num1 - num2
    result.textContent= "Result:" + " "+ substraction
    console.log(substraction)
}
function multiply() {
    let multiplication= num1 * num2
    result.textContent= "Result:" + " "+ multiplication
    console.log(multiplication)
}
function divide() {
    let division= num1 / num2
    result.textContent= "Result:" + " "+ division
    console.log(division)
}
