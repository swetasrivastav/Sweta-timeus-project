import React from 'react'
import Image04 from "../assets/Image04.png"
import image05 from "../assets/image05.png"


const Yourdreams = () => {
  return (
    <>
   <div className='flex mt-16 ml-16 space-x-40'>
    <img src={Image04} alt='background' width="700" height="auto"/>
    <h2 className='text-white  my-auto text-4xl font-normal'>That lets you<br/>
    groove to <br/>
<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ea0029] via-[#f3c300] to-[#5d7d2b] text-4xl font-normal'>your tune.</span></h2>
    </div>
    <div className='flex justify-end space-x-40 mt-12 mr-16'>
    <h2 className='text-white my-auto text-4xl font-normal'> And that makes<br/>
  
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ea0029] via-[#f3c300] to-[#5d7d2b] text-4xl font-normal'>your dreams</span>  <br/>
    come true.
</h2>
    <img src={image05} alt='background' width="700" height="auto"/>
    </div>
    </>
  )
}

export default Yourdreams