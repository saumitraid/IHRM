import React, { useState } from 'react';

const Reg = () => {
    const [data, setData]=useState('');
    const [print, setPrint]=useState(false);
    const getData=(val)=>{
        setData(val.target.value);
    }

    return (
        <div className='col-6'>
            <div className='form-group'>
                <label htmlFor="name">Enter Student Name</label>
                <input type='text' className='form-control' onChange={getData} />
                <button className='btn btn-primary' onClick={()=>setPrint(true)}>Click</button>
            </div>
            <h4>{
                print ? data : ''
                }</h4>
        </div>
    );
} 
export default Reg;