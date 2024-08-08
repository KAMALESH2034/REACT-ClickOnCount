import { useState } from "react"

function Count(){

    const[counter,setCounter] = useState(0)

    let inc = () =>{
        setCounter(counter+1)
    }

    let dec= () =>{
        if(counter!=0){
            setCounter(counter-1)
        }
    }

     return  <div className="container">
                <div className="clicker">
                    <button onClick={inc}  className="btn btn-primary col-lg-1 col-sm-2 mb-3">+</button>
                        <h1 className="countN">{counter}</h1>
                    <button onClick={dec} className="btn btn-danger col-lg-1 col-sm-2  mt-3">-</button>
    
                </div>
        </div>

}
export default Count