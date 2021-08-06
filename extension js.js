let myLeads= `["Bimal"]`
myLeads= JSON.parse(myLeads)//to turn string into an array
myLeads.push("Chalise")
myLeads= JSON.stringify(myLeads)//to turn array into a string
console.log( myLeads)
const inputEl= document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
/*function button(){
    console.log("button clicked")
}*
//LocalStorage
//localStorage.setItem("myLeads", "www.Bimal.com") //to set the value(in local storage) to be saved after refresh.
 //console.log(localStorage.getItem("myLeads")) //to dsplay the value even after refresh.
 //localStorage.clear() //to delete the saved value from the local storage.

inputBtn.addEventListener("click", function(){ //alternative way
    console.log("button clicked")
    myLeads.push(inputEl.value)
    inputEl.value= " "
    renderLeads()
//console.log(myLeads)
})
function renderLeads(){
  let listItems = " "
  for(let i= 0; i < myLeads.length; i++ ){
   listItems +=  `<li> 
   <a target="_blank" href="${myLeads[i]}"> ${ myLeads[i]} </a>
   </li>`
    //console.log(listItems)
}
//innerHTML
//Container.innerHTML= <button> Buy!</button>//works only if we have a div with id "container" and after dragging the id in js using "getElementById"
ulEl.innerHTML = listItems
}
//Template Strings
/*const recipent= "james"
const email= "Hey" + recipent + "! How is it going? Cheers Bimal."//Normal string
console.log(email)*/
/*const recipent= "james"
const sender= "Bimal"
const email= `Hey ${recipent} !
 How is it going?
  Cheers ${sender}.`//template string
console.log(email)*/