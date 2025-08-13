import React from 'react'
import ProductTab from './ProductTab.jsx';
import "./Product.css"


// function Product(props) :- passing single props.....
// function Product({title, price}) :- passig multiple props......
// function Product({title, price = 1}) :- passig default props value if price is null it can set the price is 1......
// function Product(props) {
//     // console.log(props); rerturn object type...   
//     // console.log(props.title); return object data..
//   return (
//     <div>
//          {/* <h3>Product Title</h3>  */}
//          <h3>{props.title}</h3>
//         <h5>Price :{props.price}</h5>
//     </div>
//   )
// }



// same code we are destructring 

// function Product({title, price, features, features2}) {
//     console.log(features2);
//     // const list = features.map((feature) => <li>{feature}</li>);
//   return (
//     <div className='Product'>
//          <h3>{title}</h3>
//         <h5>{price}</h5>
//         {/* <h6>{features}</h6> */}
        
//         {/* <p>{features2.a}</p> */}

//         <p>
//           {features.map((feature)=> (
//             <li>{feature}</li>
//           ))}
//         </p>
//     </div>
//   )
// }


// conditional rendring
// 1st type......................
// function Product({title,price}){
//   if(price > 30000){
//     return (
    
//     <div className='Product'>
//          {/* <h3>Product Title</h3>  */}
//          <h3>{title}</h3>
//         <h5>Price :{price}</h5>
//         <p>discount is 5%</p>
//     </div>
//   )
//   }else{
//     return (
    
//     <div className='Product'>
//          {/* <h3>Product Title</h3>  */}
//          <h3>{title}</h3>
//         <h5>Price :{price}</h5>
//     </div>
//   )
//   }
  
// }

// 2nd type......................
// function Product({title,price}) {
//   let isdiscount = price >30000 ? "discount is 5%" : "";
//     return (
//     <div className='Product'>
//          <h3>{title}</h3>
//         <h5>Price :{price}</h5>
//         <p>{isdiscount}</p>
//     </div>
//   )  
// }

// 3rd type......................
// function Product({title,price}) {
//     return (
//     <div className='Product'>
//          <h3>{title}</h3>
//         <h5>Price :{price}</h5>
//         {/* <p>{ price >30000 ? "discount 5%" : ""}</p>  ::-- create dom element for the empty space " " this in html for all component*/}
//          {/* { price >30000 ? <p>"discount 5%"</p> : null}  ::-- create dom element for only conditio true component , not for all component  */}
//          { price >30000 && <p>"discount 5%"</p>}
//     </div>
//   )  
// }


// styling our component
function Product({title,price}) {
  // let style = {backgroundColor : "yellow", color : "black"};
  let style = {backgroundColor : price>30000 ? "yellow" : "" , color : "black"};
    return (
    <div className='Product' style={style}>
         <h3>{title}</h3>
        <h5>Price :{price}</h5>
         { price >30000 && <p>"discount 5%"</p>}
    </div>
  )  
}



export default Product;