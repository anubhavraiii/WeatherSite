import { useState } from "react"
import {v4 as uuidv4} from "uuid"

export default function ToDoListWithMarkAsDone() {
    let [todos, setToDo] = useState([{task : "sample task", id : uuidv4(), isDone : false}]); // button
    let [newtodo, setNewToDo] = useState(""); // input

    let addNewTask = () => {
        setToDo((prevtodos) => {
            return [... prevtodos, {task : newtodo, id : uuidv4(), isDone : false}] 
        }); // copy of todo
        setNewToDo("");
    }
    // setting newtodo from input field
    let updateToDoValue = (event) => {
        setNewToDo(event.target.value); // setting new to do to event
    }
    let markTaskDone = (id) => {
        setToDo((prevtodos) => 
            prevtodos.map( (todo) => {
                if(todo.id == id){
                    console.log("Marked Done");
                    return {...todo, isDone : true}
                } else{
                    return todo
                }
            })
        );
    }
    let markAllDone = () => {
        setToDo((prevtodos) => 
            prevtodos.map( (todo) => {
                return {...todo, isDone : true}
                
            })
        );
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
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span> &nbsp;&nbsp;
                    <button onClick={() => markTaskDone(todo.id)}>Mark Done</button>
                </li>)
            )}
        </ul>
        <button onClick={markAllDone}>Mark All Done</button>
    </div>
    )
}