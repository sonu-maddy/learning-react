import React from 'react'
import Product from './Product.jsx';

// function ProductTab() {
//   return (
//     <>
//         {/* passing props as number using curruly barcket */}
//         <Product  title = "phone" price = {30000}/>
//         <Product  title = "laptop" price = "40,403"/>
//         <Product  title = "pen" price={50000 / 2}/>
//     </>
//   )
// }

function ProductTab() {
   let features = ["hi-tech", "durable", "fast"]; // array..
  //let features = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>]; //this is ways to pased the array as a html tag, 
  let option = {a:"hi-tech", b:"durable", c : "fast"}; // object....
  return (
    <>
        {/* passing props as number using curruly barcket */}
         <Product  title = "phone" price = {30000} features = {features} features2 = {option}/>  {/*also passing object using {{a:"hi-tech"}} */}
        <Product  title = "laptop" price = "40,403"/>
        <Product  title = "pen" price={70000 / 2}/>
    </>
  )
}

export default ProductTab;
