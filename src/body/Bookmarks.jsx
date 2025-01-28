import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmark}) => {
    
    return (
       <div>

          <div className='p-2 flex justify-between items-center mx-3'>
              <p className='text-xl text-blue-600 font-bold'>Bookmark</p>
              <p className='text-xl font-semibold text-red-600'>50 Min</p>          
            
           </div>
           <div>
            {
                bookmark.map(bookmark=><Bookmark key={bookmark.unique_id} bookmark={bookmark}></Bookmark>)
            }

          </div>
       </div>
    );
};

export default Bookmarks;