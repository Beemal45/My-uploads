let myLeads= []
/*let myLeads= `["Bimal"]`
myLeads= JSON.parse(myLeads)//to turn string into an array
myLeads.push("Chalise")
myLeads= JSON.stringify(myLeads)//to turn array into a string
console.log( myLeads)*/
const inputEl= document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const tabBtn= document.getElementById("tab-btn")
/*function button(){
    console.log("button clicked")
}*/
//LocalStorage
//localStorage.setItem("myLeads", "www.Bimal.com") //to set the value(in local storage) to be saved after refresh.
 //console.log(localStorage.getItem("myLeads")) //to dsplay the value even after refresh.
 //localStorage.clear() //to delete the saved value from the local storage.
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads= leadsFromLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems = " "
    for(let i= 0; i < myLeads.length; i++ ){
     listItems +=  `<li> 
     <a target="_blank" href="${leads[i]}"> ${ leads[i]} </a>
     </li>`
      //console.log(listItems)
  }
  ulEl.innerHTML = listItems
}
inputBtn.addEventListener("click", function(){ //alternative way for "button" function.    console.log("button clicked")
    myLeads.push(inputEl.value)
    inputEl.value= " "
    render(myLeads)
//console.log(myLeads)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
//To verify that it works:
//console.log(localStorage.getItem("myLeads"))
})

//innerHTML
//Container.innerHTML= <button> Buy!</button>//works only if we have a div with id "container" and after dragging the id in js using "getElementById"

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
//localStorage.clear()
//Delete Button
const deleteBtn= document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function(){
   localStorage.clear()
   //console.log("clicked")
   myLeads= []
   render(myLeads)
})
//Tab btn

tabBtn.addEventListener("click", function(){
//console.log(tabs[0].url)
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify("myLeads"))
render(myLeads)
})
})
