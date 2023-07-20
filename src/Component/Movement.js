import React from 'react'
import image06 from "../assets/image06.png"

const Movement = () => {
  return (
    <>
     <div className='text-start my-24  ml-60'> 
        <p  className='text-white text-3xl '>Because in the end,<br/>
        it is
    <span className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ea0029] via-[#f3c300] to-[#5d7d2b] font-normal'> Movement that Inspires </span>
    us all.
    </p>
    </div>
    <div className='px-16'>
    <img src={image06} alt='background'/>
    </div>
      <h2 className='text-white text-center mt-16 text-4xl font-medium'>What inspires you?</h2>
      <div className='flex space-x-4 mx-72 my-8'>
    <div className=' shadow-xl bg-white w-32 rounded-sm '>
      <p className='text-[#05141f] text-center py-1 '>Traveling</p>
    </div>
    <div className=' shadow-xl bg-[#1b303f] w-32 rounded-sm'>
      <p className='text-white text-center py-1'>Driving</p>
    </div>
    <div className=' shadow-xl bg-[#1b303f] w-32 rounded-sm'>
      <p className='text-white text-center py-1'>Binge watching</p>
    </div>
    <div className=' shadow-xl bg-[#1b303f] w-32 rounded-sm'>
      <p className='text-white text-center py-1'>Reading</p>
    </div>
    <div className=' shadow-xl bg-[#1b303f] w-32 rounded-sm'>
      <p className='text-white text-center py-1'>Working out</p>
    </div>
    <div className=' shadow-xl bg-[#1b303f] w-32 rounded-sm'>
      <p className='text-white text-center py-1'>Morning walk</p>
    </div>
    </div>
    <p className='text-white text-3xl my-6 text-center '>Your soul wanders. It seeks inspiration at every turn.<br/>
In every object. At every destination it visits.</p>
<div className=' bg-white w-28 rounded-full mx-auto mt-8 mb-20'>
  <p className='text-[#05141f] text-center font-semibold'>Share</p>
</div>

    </>
  )
}

export default Movement