import React from 'react'

// event object in react.......
function handleFormSubmit(){
    event.preventDefault();
    console.log("form was submitted");
    console.log(event);
}

export default function Form() {
 return (
    <form action="" onSubmit={handleFormSubmit}>
        <input type="text" placeholder='write something' />
        <button >Submit</button>
    </form>
  )
}
