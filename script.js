import checkComplite from "./components/checkComplite.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
const createTask = (evento) => {
    evento.preventDefault();
    const value= input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplite());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};
btn.addEventListener("click",createTask);
