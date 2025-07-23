import React from 'react'

// event handling....
function PrintHello(){
    console.log("hello!");
}
export default function Button() {
  return (
    <div>
        <button onClick={PrintHello}>Click me..</button>
    </div>
  );
}
