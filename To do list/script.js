const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container"); 

function addTask(){
    if(inputBox.value === ''){
        alert("you must enter something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value =" ";
    saveData();

}

listContainer.addEventListener("click",function(v){
    if(v.target.tagName === "LI"){
        v.target.classList.toggle("checked");
        saveData();
    }
    else if(v.target.tagName === "SPAN"){
        v.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();