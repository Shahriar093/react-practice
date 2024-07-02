import { useState } from "react"

export default function State () {

    const [count, setCount] = useState(0);
    const handleMinus = () =>{
        setCount(count => count - 1);
    }
    const handlePlus = () =>{
        setCount(count => count + 1);
    }
    return (
    <div style={{display:"flex"}}>
        <button disabled={count<1} onClick={handleMinus}>
            -
        </button>
        &nbsp; &nbsp;
        <h2> {count} </h2>
        &nbsp; &nbsp;
        <button disabled={count>9} onClick={handlePlus}>
            +
        </button>
    </div>
    )
}