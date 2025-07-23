// import title component
// synatax 
//import Title  from './Title';'./Title.jsx'

// Default Export
// export default Title;

// Named Export
// export {Title};
// import {Title} from "./Title.jsx";


import MsgBox from "./MsgBox.jsx"
import Title  from './Title.jsx';
import './App.css'
import ProductTab  from './ProductTab.jsx'


// function Title (){
//   return <h1>I am the Title</h1>
// }

function Description (){
  return <h1>I am the Description</h1>
}

import Button from "./Button.jsx";
import Form from "./Form.jsx";

//starting cammel case.
function App() {
  
    // return <h1>hello world;</h1>;
    // rendring component 3 ways - <Title /> , <Title></Title> , Title();
    return (
    // <div>
      
    //   <MsgBox userName = "Sonu Maddheshiya" textColor = "red" />

    //   <h3>this props learning</h3>
    //   <ProductTab />

    //   <br /><br />
    //   <h3>this is title section</h3>
    //   <Title /> 
    //   <Title /> 
    //   <Description/>
    //   <h1>this is button</h1>
    //   <button>click here</button>
    // </div>
    // without creating extra node div.. this is called react fragment.
    //  <>..........</>



    // event handling
      <>
      {/* <Button /> */}
      <Form></Form>
      </>
    
  );
      
}

export default App
