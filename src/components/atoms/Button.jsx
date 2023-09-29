import React from 'react'

function Button({msn}) {
  return (
    <button className='bg-[#4A8549] text-white font-bold hover:bg-[#4a8549e1] block w-max py-3 px-12 rounded-full'>{msn}</button>
  )
}

export default Button