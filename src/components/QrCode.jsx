import React from 'react'

function QrCode() {
  return (
    <div className='bg-slate-300 flex justify-center items-center h-screen w-full' > 
    <div className='bg-white w-80 h-[490px] pt-4 pr-4 pl-4 rounded-[16px] pb-6' >
    <img src="image-qr-code.png" alt="QR CODE" className='w-full h-auto rounded-[10px] mb-6' />
    <p className='mb-3.5 text-center font-bold  text-lg font-outfit'>Improve your front-end skills by building projects</p>
    <p  className='text-center font-normal text-base font-outfit '>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
    </div>
  )
}

export default QrCode