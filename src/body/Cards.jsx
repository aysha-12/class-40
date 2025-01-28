import React, { useEffect, useState } from 'react';
import Singlecard from './Singlecard';

const Cards = ({handleclick}) => {
    const [values,setvalues]=useState([])
    useEffect(()=>{
        fetch('../../public/Data.json')
        .then(res=>res.json())
        .then(data=>setvalues(data))
    },[])
    return (
        <div className='p-10'>
            {
                values.map(value=><Singlecard handleclick={handleclick}  key={value.unique_id} value={value}></Singlecard>)
            }
            
        </div>
    );
};

export default Cards;