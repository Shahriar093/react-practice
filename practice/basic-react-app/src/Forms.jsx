import React, { useState } from 'react'

export default function Forms() {
    let [fullname, setFullname] = useState("Halum")
    const handleChange = (event)=>{
        setFullname(event.target.value)
        console.log(event.target.value);
    }
  return (
    <div>
        <form action="">
            <input placeholder='Enter'
            value={fullname} 
            type='text'
            onChange={handleChange}
            /> &nbsp;
            <button>Submit</button>
        </form>
    </div>
  )
}
