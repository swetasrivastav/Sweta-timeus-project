import React from 'react'
import image01 from "../assets/image01.jpg"
import Image02 from "../assets/Image02.PNG"


const Inspire = () => {
  return (
  <>

    <div className='flex ml-16 space-x-40'>
    <img src={image01} alt='background' width="700" height="auto"/>
    <h2 className='text-white  my-auto text-4xl font-normal'>That you are<br/>
in the right place<br/>
<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ea0029] via-[#f3c300] to-[#5d7d2b] text-4xl font-normal'>at the right time.</span></h2>
    </div>
    <div className='flex justify-end space-x-40 mt-12 mr-16'>
    <h2 className='text-white my-auto text-4xl font-normal'>That helps<br/>
you find<br/>
<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ea0029] via-[#f3c300] to-[#5d7d2b] text-4xl font-normal'>your move.</span></h2>
    <img src={Image02} alt='background' width="700" height="auto"/>
    </div>
    </>
  )
}

export default Inspire