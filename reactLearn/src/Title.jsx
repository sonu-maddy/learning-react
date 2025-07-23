import "./Title.css"

function Title (){
//   return <h1>I am the Title</h1>
    let name = "sonu";
    return (
        <div className="Title">
            <p>2*2 = {2*2}</p>
            <p>Hii, {name}</p>
            <p>Hii, {name.toUpperCase()}</p> 
        </div>
    );
}
// export this comport 
export default Title;