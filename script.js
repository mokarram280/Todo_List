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

    const task = `<div class="task">
    <span id="taskName">${taskName}</span>
    <button id="edit">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button id="delete">
        <i class="fa-solid fa-trash"></i>
    </button>
</div>`;

taskContainer.insertAdjacentHTML("beforeend",task);
const deleteButton = document.querySelectorAll("#delete");
deleteButton.forEach((button)=>{
    button.onclick = ()=>{
        button.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    }
});

const editButtons = document.querySelectorAll("#edit");
     editButtons.forEach((editBtn)=>{
        editBtn.onclick = (e) =>{
            let targetElement = e.target;
            if(!(e.target.className == "edit")) {
                targetElement = e.target.parentElement;
            }
            inputText.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };
     });

     taskCount += 1;
displayCount(taskCount);
inputText.value = "";
};