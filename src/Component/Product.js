import React from 'react'
import car01 from "../assets/car01.png"
import car02 from "../assets/car02.png"

import car03 from "../assets/car03.png"




const Product = () => {
  return (
    <div className='bg-white'>
  
    <div className='ml-16 pt-8' >
        <p className='text-gray-900 text-4xl font-medium'>Products that inspires</p>
    </div>
    <div className='flex ml-32 space-x-16 py-20 '>
     <div>
    <img src={car01} alt='car' className='w-72 h-32 p-2'/>
    <h3 className='text-gray-900 text-xl font-medium mt-8 text-center'>Name of Car</h3>
    <p className='text-sm text-gray-900 text-center'>Konw More</p>
    </div>
    <div className=''>
    <img src={car02} alt='car' className='w-96 h-40 p-2'/>
    <h3 className='text-gray-900 text-xl font-medium text-center'>Name of Car</h3>
    <p className='text-sm text-gray-900 text-center'>Konw More</p>
    </div>
    <div>
    <img src={car03} alt='car' className='w-69 h-40 p-3'/>
    <h3 className='text-gray-900 text-xl font-medium text-center'>Name of Car</h3>
    <p className='text-sm text-gray-900 text-center'>Konw More</p>
    </div>
    </div>
    </div>
  )
}

export default Product