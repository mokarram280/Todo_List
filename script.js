const inputText = document.querySelector("#inputText");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error")
const taskContainer = document.querySelector("#tasks");
const countValue = document.querySelector("#countValue");

let taskCount = 0;
const displayCount = (taskCount)=>{
    countValue.innerText = taskCount;
};

const addTask = ()=>{
    const taskName = inputText.value.trim();
    error.style.display = "none";
    if(!taskName){
        setTimeout(()=>{
            error.style.display = "block";
        },200);
        return;
    }

};