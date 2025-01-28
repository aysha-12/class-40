
import { useState } from 'react'
import './App.css'
import Bookmarks from './body/Bookmarks'
import Cards from './body/Cards'
import Header from './header/Header'




function App() {
  const[bookmark,setbookmark]=useState([])

  const handleclick=(id)=>{
      const newvalue=[...bookmark,id]
      setbookmark(newvalue)
  }

  return <div className='font-poppins'> 
     
        <Header></Header> 
        <div className='mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
         <div className='col-span-2 border-1 border-black'>
           <Cards  handleclick={handleclick}></Cards>
         </div>
          <div className='border-1 border-black bg-gray-200'>
            <Bookmarks bookmark={bookmark}></Bookmarks>
          </div>
          
        </div>     
  </div>
}

export default App
