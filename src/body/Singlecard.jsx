import React from 'react';
import { IoIosBookmark } from "react-icons/io";


const Singlecard = ({value,handleclick}) => {
    const {coverImg,author_img,date,author_name,reading_time,headline,hash_tags,unique_id}=value;
    return (
        <div className='m-7 mb-8'>
            <img className='h-[300px] rounded-xl w-full' src={coverImg} alt="" />
            <div className='flex items-center justify-between mx-3'>
                <div className='mt-4 flex items-center gap-2'>
                    <img src={author_img} alt="" />
                    <div>
                        <p className='font-medium'>{author_name}</p>
                        <p className='font-medium'>{date}</p>
                    </div>
                </div>
                <div className='flex items-center'>      
                    <IoIosBookmark className='text-3xl' onClick={()=>handleclick(value)} />
                    <p className=''>{reading_time}</p>
                </div>
            </div>
            <div className=' ml-3 my-2 text-2xl font-bold'>
                <p>{headline}</p>
            </div>
            <div className='flex gap-5 ml-3 mb-5'>
                 {
                    hash_tags.map((value,index)=><div key={index}>
                        <p>{value}</p>
                    </div>)
                 }
            </div>
            
        </div>
        


    );
};

export default Singlecard;