import React from 'react';

const Bookmark = ({bookmark}) => {
    
    return (
        <div className='mt-10 m-2'>
            <div className='bg-gray-300 flex p-5 items-center gap-3 rounded-lg'>
                <p className='font-bold'>{bookmark.headline}</p>
                <div>
                    <img className='h-20 w-32 rounded-xl' src={bookmark.coverImg} alt="" />
                    <p className='text-center mt=2'>{bookmark.reading_time }</p>
                </div>
            </div>
            
        </div>
    );
};

export default Bookmark;