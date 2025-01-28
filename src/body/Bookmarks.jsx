import React from 'react';

const Bookmarks = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className='p-2 flex justify-between items-center mx-3'>
            <p className='text-xl text-blue-600 font-bold'>Bookmark</p>
            <p className='text-xl font-semibold text-red-600'>50 Min</p>
            
            
        </div>
    );
};

export default Bookmarks;