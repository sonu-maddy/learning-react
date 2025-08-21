import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4 } from 'uuid';

export default function TodoApp() {

  //  let [todos, settodos] = useState(["sample"]);
    let [todos, settodos] = useState([{task:"sample", id: uuidv4()}]);
    let [newTodo, setnewTodo] = useState("");

    let addNewTast = () => {
       // const newtast = {tast: newTodo, id: uuidv4()};
        // settodos([...todos, newTodo]); // only add string array... now on up we handle the object
       
       // settodos([...todos, {task: newTodo, id: uuidv4()}])
      
       settodos((todos) =>{
            return [...todos, {task: newTodo, id: uuidv4()}];
        }) // add object with task and id
        setnewTodo(""); // clear the input field after adding the task
    
    }

    let handleInputChange = (event) => {
        // console.log(event.target.value);
        setnewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        // console.log(id);
        settodos((todos) => {
            return todos.filter((item) => item.id !== id);
        });
    }


  return (
    <div><h2>Todo App</h2> <br />

        <input
         type="text" 
         placeholder='add a tast' 
         value={newTodo}
         onChange={handleInputChange}
         />
         <br /><br />
        <button onClick={addNewTast}>Add Tast</button>
        <br /><br /><br /><br /><br /><br />

        <h4>Todo List</h4>
        
        <ul>
            {
                todos.map((item) => (
                    <li key={item.id}>
                        <span>{item.task}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        {/* <span>{item.id}</span> */}
                        <button onClick={() => deleteTodo(item.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
        

    </div>
  )
}  
