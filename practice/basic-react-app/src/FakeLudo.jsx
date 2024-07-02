import { useState } from "react"

export default function Ludo(){
    let [guti, setGuti] = useState({blue:0, green:0, yellow:0})
    let [arr, setArr] = useState(["No Moves "]);
    const handleblue = ()=>{
        setGuti({...guti, blue:guti.blue + 1});
        setArr([...arr, "Blue-moves "])
    }
    const handlegreen = ()=>{
        setGuti({...guti, green:guti.green + 1});
        setArr([...arr, "Green-moves "])
    }
    const handleyellow = ()=>{
        setGuti({...guti, yellow:guti.yellow + 1});
        setArr([...arr, "Yellow-moves "])
    }
    return (
        <div>
            <h1>FAKE LUDO</h1>
            <p>{guti.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={handleblue}>+1</button>
            <p>{guti.green}</p>
            <button style={{backgroundColor:"green"}} onClick={handlegreen}>+1</button>
            <p>{guti.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={handleyellow}>+1</button>

            <p style={{border:"1px solid red", color:"violet"}}>
                <h2 style={{border:"1px solid green"}}>{arr}</h2>
            </p>
        </div>
    )
}