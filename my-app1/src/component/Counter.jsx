import React, { useState } from 'react';

const Counter = () => {
    let [name, setName]=useState("Euphoria");
    let updateData = () => {
        setName("GenX")
    }

    return ( 
        <div>
        <h1>{name}</h1>
        <button className='btn btn-primary' onClick={updateData}>Click</button>
        </div>
     );
}
export default Counter;