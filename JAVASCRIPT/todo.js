let addTaskBtn=document.querySelector("#addTaskBtn")
let newTaskInput=document.querySelector("#newTask")
let todoList=document.querySelector("#todo-list")


function createTaskElement(taskText){
    let taskElement=document.createElement("div")
    taskElement.innerHTML=`    <span>${taskText}</span>
    <button class="editTask">edit </button>
    <button class="deleteTask">delete</button>`

    let deleteBtn=taskElement.querySelector(".deleteTask")
    deleteBtn.addEventListener("click",()=>{
      taskElement.remove();
    })

    let editBtn=taskElement.querySelector(".editTask")
    editBtn.addEventListener("click",()=>{
      let newTasktext=prompt("add your new task ")
      if(newTasktext!="")
        {
          taskElement.querySelector("span").innerText=newTasktext
        }
    })
    return taskElement;

}




addTaskBtn=addEventListener("click",function(){
   let taskText= newTaskInput.value.trim()
  if(taskText!==""){
   let taskElement= createTaskElement(taskText)
   todoList.appendChild(taskElement)
   newTaskInput.value=""
  }

})

