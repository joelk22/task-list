import React, { useState } from 'react'

function ToDoList() {

    // tasks is set to an empty array with a setter
    const [tasks, setTask] = useState([]);
    // new task is what we will be editing and adding to task list
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }


    return(
    <div className="to-do-list">
        <h1>To-do-list</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
            />
        </div>
    </div>)
}

export default ToDoList