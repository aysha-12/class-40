import React, { useEffect, useState } from 'react';
import Singlecard from './Singlecard';
import { getData } from '../localstorage/localstorage';

const Cards = ({handleclick ,bookmark,setbookmark}) => {
    const [values,setvalues]=useState([])
    useEffect(()=>{
        fetch('../../public/Data.json')
        .then(res=>res.json())
        .then(data=>setvalues(data))
    },[])

    useEffect(()=>{
        const data=getData()
        console.log(data)
        const mt=[]
        for(const da of data){
            const filter=values.find(idx=>idx.unique_id ===da)
            console.log(filter)
            mt.push(filter)

        }
        setbookmark(mt)
    },[values])
    return (
        <div className='p-10'>
            {
                values.map(value=><Singlecard handleclick={handleclick}  key={value.unique_id} value={value}></Singlecard>)
            }
            
        </div>
    );
};

export default Cards;