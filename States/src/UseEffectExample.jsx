import { useEffect, useState } from 'react'
import './App.css'

function UseEffectExample() {
  
  const [count, setcount] = useState(0);
  const [totle, setTotle] = useState(0);

  //first - side effect to run on component mount
  // second -  cleanup function to run on component unmount
  // third - dependency array to control when the effect runs

  // useEffect(() => {
  //   first 
  //   return () => {
  //     second
  //   }
  // }, [third])

  // variation 1: run effect on every render
  // useEffect(() => {
  //   alert("I will run on every render")
  // });

  // variation 2: run effect on one start render
  // useEffect(() => {
  //   alert("I will run on one start render")
  // },[]);

  // variation 3: run effect on every time when count is updated
  // useEffect(() => {
  //   alert("I will run on every time when count is updated")
  // },[count]);

  // variation 4: multiple dependencies
  // useEffect(() => {  
  //   alert("both count and totle are updated");
  // },[count, totle]);

  // variation 5: cleanup function
  useEffect(() => {
    alert("I will run on every render");
    return () => {
      alert("I will run on component unmount");
    }
  }, [count]);


  function haldleCount(){
    setcount(count +1);
    
  }

  function haldleTotleCount(){
    setTotle(totle + 1);
  }
  
  return (
    <>
     <div>Hello from UseEffect</div>

     <div>
      <button onClick={haldleCount}>increment</button>
      <br />
      Count is : {count}
     </div>
     <br />
     <br />
     <div>
      <button onClick={haldleTotleCount}>totle</button>
      <br />
      Totle is : {totle}
     </div>
    </>
  )
}

export default UseEffectExample
