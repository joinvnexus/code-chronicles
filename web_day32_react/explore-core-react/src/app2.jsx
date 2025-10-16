
import "./App.css"
function App2(){
    return(
        <div>
            <h1 className="text">explore react core </h1>
            <Student name="projoy" age="20" />
            <Student name="Riya" age="20" />
            <Person />
            <Devloper name= "rahul" technology="react"/>
            <Devloper name = "rohit" technology="Node"/>
            <Devloper name = "projoy" technology="java"/>
            <Devloper name = "projoy" />
          <button className="btn btn-primary">Click me</button>

        </div>
    )
}

export default App2;
function Person (){
    const name = "projoy";
    const age = 20;

    const personStyle ={
        color: "red",
        fontSize: "20px",
        fontWeight: "bold",
    }
    return(
        <div>
            <h1>person</h1>
            <p style={personStyle} >my nme is {name} and i am {age} years old.</p>
        </div>
    )
}
function Devloper (props ){
console.log(props)

    return(
        <div style={{
            border :"1px solid green",
            borderRadius:"10px",
        }}>
            <h1>devloper : {props.name}</h1>
            <p>technology :{props.technology}</p>
        </div>
    )
}

const Student = (props)=>{

    return(
        <div className="student">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    )
}
