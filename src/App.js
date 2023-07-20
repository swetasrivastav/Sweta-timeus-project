import React from 'react'
import Navbar from './Component/Navbar'
import Inspirations from './Component/Inspirations'
import Inspire from './Component/Inspire'
import Leaveamark from './Component/Leaveamark'
import Yourdreams from './Component/Yourdreams'
import Movement from './Component/Movement'
import Product from './Component/Product'

const App = () => {
  return (
    <>
  
    <div className='bg-[#05141f] h-full'>
      <Navbar/>
      <Inspirations/>
      <Inspire/>
      <Leaveamark/>
      <Yourdreams/>
      <Movement/>
      <Product/>
    </div>
   
    </>
  )
}

export default App