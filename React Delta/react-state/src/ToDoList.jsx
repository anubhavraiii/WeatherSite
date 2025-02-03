import { useState } from "react"
import {v4 as uuidv4} from "uuid"

export default function ToDoList() {
    let [todos, setToDo] = useState([{task : "sample task", id : uuidv4()}]); // button
    let [newtodo, setNewToDo] = useState(""); // input

    let addNewTask = () => {
        setToDo((prevtodos) => {
            return [... prevtodos, {task : newtodo, id : uuidv4()}] 
        }); // copy of todo
        setNewToDo("");
    }
    // setting newtodo from input field
    let updateToDoValue = (event) => {
        setNewToDo(event.target.value); // setting new to do to event
    }
    let deleteTask = (id) => {
        setToDo(todos.filter((todo) => todo.id != id));
    }

    let myStyle = {border : "1px solid white", borderRadius : "10px"}

    return (
    <div style={myStyle}>
        <input placeholder="add a task" onChange={updateToDoValue} value={newtodo}></input>
        <br></br>
        <br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br></br> <br></br> <hr></hr>
        <h3>Tasks To-Do</h3>
        <ul>
            {todos.map((todo) => {
                return (
                <li key={todo.id}>
                    <span>{todo.task}</span> &nbsp;&nbsp; <button onClick={() => deleteTask(todo.id)}>Delete</button>
                </li>);``
            })}
        </ul>
    </div>
    )
}