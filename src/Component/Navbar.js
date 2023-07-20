import React from 'react'
import TopImage from "../assets/TopImage.PNG"
const Navbar = () => {
  return (
    <>
    <div>
<div className='flex'>
    <ul className='flex  my-4 space-x-6 mx-16 text-white'>
        <li>Cars</li>
        <li>Buy</li>
        <li>Service</li>
        <li>VR Showroom</li>
        </ul>
       
          <div className='text-2xl font-bold  my-4 mx-60 text-white'>LOGO</div>
          
            <ul className='flex space-x-6 my-4 text-white'>
          <li className='border-b-2 border-red-600'>Our Manifesto</li>
        <li>Brand Experience</li>
        <li>Logo Philosophy</li>
      
          </ul> 
          </div>
          <div className='relative'>
          <img src={TopImage} alt='background'/>
           <h1 className='text-white absolute top-72 ml-12 font-normal text-7xl'>Movement<br/>
           <span className='font-semibold text-7xl'>that inspires</span></h1>
          </div>
</div>
          
    
    </>
  )
}

export default Navbar