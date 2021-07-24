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
    //console.log(count)
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
/*let num1= 8
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
}*/

let firstCard= 0
let secondCard= 0
let sum= firstCard + secondCard
let isAlive= false
let hasBlackJack= false
let message= " Do you want to play a round?"
let messageEl= document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let nextRoundEl= document.getElementById("next-round")
let cards=[firstCard, secondCard]
let playerCoins= 1000 
//console.log(cards)
//console.log(sum)
let player= {
    name: "Bimal",
    chips: "Rs." + playerCoins
}
let playerEl= document.getElementById("player-el")
playerEl.textContent= player.name +": " + player.chips

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1
    // return randomCard
    if(randomCard===1){
        return 11
    }
        else if(randomCard> 10){
            return 10
    }
    else {
        return randomCard
    }
}
function startGame() {
isAlive= true
firstCard= getRandomCard()
secondCard= getRandomCard()
 cards= [firstCard, secondCard]
 sum= firstCard + secondCard
renderGame()
}

function renderGame() {
    cardsEl.textContent= "Cards: " 
for(let i=0; i<cards.length; i+=1){
    cardsEl.textContent+= cards[i] +" " + "|" 
}
 if(sum<=20) {
    message="Do you want to draw a new card?"
    isAlive= true
    
}
else if (sum=== 21) {
    message="You've got a Blackjack!"
     hasBlackJack= true
     playerCoins+=30
}
else  {
    message= "Game Over! Play next round?"
    isAlive= false
    playerCoins-= 10
}

messageEl.textContent= message
sumEl.textContent= "Sum: " + sum
playerEl.textContent= player.name+": "+ "Rs."+playerCoins
console.log(player.chips)
}
function shuffle() {
    if (isAlive=== true && hasBlackJack=== false){
    let newCard= getRandomCard()
    //console.log("Drawing a new card from the deck!")
    //console.log(cards)
    sum+= newCard
    cards.push(newCard)
    renderGame()
    }
    console.log(sum)
}
 function nextRound(){
     //firstCard= 0
     //secondCard= 0
     //cards=[firstCard, secondCard]
     //sum= firstCard + secondCard
     getRandomCard() 
     startGame()
     isAlive= true
     hasBlackJack= false
 }
 

/*function playerCoins() {
    playerEl.textContent= player.name  
for(let i=0; i<cards.length; i+=40){
    cardsEl.textContent+= cards[i] +" " + "|" 
}
 if(sum<=20) {
    message="Do you want to draw a new card?"
    isAlive= true
}
else if (sum=== 21) {
    message="You've got a Blackjack!"
     hasBlackJack= true
}
else  {
    message= "Game Over!"
    isAlive= false
}
}*/


//returning values in functions
/*let lap1Time= 102
let lap2Time= 107
function totalRaceTime(){
    return lap1Time +lap2Time
}
let raceTime= totalRaceTime()
    
    console.log(raceTime)*/

    
   
    
    




/*console.log(4===3)
console.log(4<3)
console.log(4>3)
console.log(4<=3)
console.log(4>=3)*/

//if else statement
/*let age= 20
if (age<21) {
    console.log("You're not allowed to enter the club")
}
else {
    console.log("Welcome!")
}*/

/*let age = 10
if (age<100) {
    console.log("Not eligible")
}
else if(age=== 100) {
    console.log("Here is your birthday card form the king")
}
else {
    console.log("Not eligible, you've already gotten one")
}*/

//Array
/*let profile = ["2 yrs", "Bachelor", "Tally", "Computer"]
console.log( profile[1] )
console.log(profile[3])
console.log(profile[0])*/

//for loop
/*for(let i= 10; i<101; i+= 10) {
console.log(i)}*/

//for loop arrays
/*let bimal=[7,3,9, 11]
for(let i=0; i< bimal.length; i++){
    console.log(bimal[i])}*/

/*let sentence=["Hello", "my", "name", "is", "Bimal."]
let greetingEl= document.getElementById("greeting-el")
for(let i=0; i< sentence.length; i++){
   // console.log(sentence[i])
    greetingEl.textContent+= sentence[i]+ " " // " " is for spacing after each words.
}*/

//generating random numbers
/*let randomNumber= Math.floor(Math.random()*6) + 1
console.log(randomNumber)*/

/*function rollDice(){
    let  randomNumber= Math.floor(Math.random()*6) + 1
  return randomNumber
}
console.log(rollDice())*/

//Logical AND Operator
/*let hasSolvedChallenge= false
let hasHintsLeft= false

if (hasSolvedChallenge=== false && hasHintsLeft=== false){
    showSolution()
}
function showSolution(){
    console.log("showing the solution...")
}*/

//OR operator
/*let likesDocumentaries= false
let likesStartUps= true
if(likesDocumentaries=== true || likesStartUps=== true){
    recommendMovie()
}
function recommendMovie(){
    console.log("Watch this movie.")
}*/

//Objects
/*let castle ={
    rooms: 5,
    wall: "Made up of old stones",
    isClean: true,
    surrounding: ["sea", "garden", "parking", 2]
}
console.log(castle["wall"]) //alternative way 
console.log(castle.surrounding)
console.log(castle.isClean)
console.log(castle.rooms)*/

//recap object and function
/*let person= {
    name: "Bimal", 
    age: 24, 
    country: "Nepal"
}
function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in" + person.country )
}
logData()*/
