let myLeads= []
const inputEl= document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
/*function button(){
    console.log("button clicked")
}*/
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
   listItems += "<li>" + myLeads[i]+ "</li>"
    //console.log(listItems)
}
//innerHTML
//Container.innerHTML= <button> Buy!</button>//works only if we have a div with id "container" and after dragging the id in js using "getElementById"
ulEl.innerHTML = listItems
}
