import { useState } from 'react'
import './App.css'

import LikeButton from './LikeButton.jsx'
import LudoBoard from './LudoBoard.jsx'
import TodoApp from './TodoApp.jsx'
import ItemDetails from './ItemDetails.jsx'

// function inCount() {
//   count = count + 1;
//   console.log(count);
// }



export default function App() {
  let [count, setCount] = useState(0);
  let inCount = () => {
    //  let arr = useState(10);
    //  console.log(arr);
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      {/* <h2>Count = {count}</h2>
      <button onClick={inCount}>Increase Count</button>
      <br />
      <br />
      <LikeButton /> */}

      {/* <LudoBoard /> */}

      {/* <TodoApp /> */}
      
      <ItemDetails/>

    </>
  )
}

