import { useState } from "react"
import Win from "./Win"
export default function Lottery(){
    let [num, setNum] = useState({rand1:0, rand2:0, rand3:0})
    const r1 = Math.floor(Math.random()*10)+0
    const r2 = Math.floor(Math.random()*10)+0
    const r3 = Math.floor(Math.random()*10)+0
    const handleButton = () =>{
        setNum((num)=>{
            return({...num, rand1:r1, rand2:r2, rand3:r3})
        })
    }
    return (
        <div>
            {
                num.rand1+num.rand2+num.rand3===15? <Win r1={num.rand1} r2={num.rand2} r3={num.rand3}/> :
                <div>
                    <h1>Lottery</h1>
                    <h4>Lottery Ticket = {num.rand1}{num.rand2}{num.rand3}</h4>
                </div>
            }
            <button onClick={handleButton}>
                Get New Ticket
            </button>   
        </div>
    )
}