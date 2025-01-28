import React from 'react';
import logo from '../assets/1 (1).png'
import logoimg from '../assets/logo (1).png'

const Header = () => {
    return <div >

     <div  className='bg-blue-100 '>
           
       <div  className='max-w-6xl mx-auto flex justify-between py-3'>
         <img className='h-[60px] w-[190px]' src={logoimg} alt="" />
         <img src={logo} alt="" />
        
        </div>
      </div> 
      <hr className='border-[2px] border-black'/>    
      
     
        </div>
            
        
    
};

export default Header;