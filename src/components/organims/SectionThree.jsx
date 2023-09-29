import React from 'react'
import Rebajas from '../../assets/imagenes/Rebajas.png';
import woman5 from '../../assets/imagenes/woman5.png';
import new1 from '../../assets/imagenes/New.png';

function SectionThree() {
  return (
    <>
        <section className='relative p-2'>
            <img src={new1} alt="" className=' absolute top-0 right-0 w-[30%] lg:w-[20%]' />
            <div className='flex md:flex-row flex-wrap flex-col  items-center md:justify-start'>
                <img src={woman5} alt="" className='w-[20%]' />
                <img src={Rebajas} alt="" className='w-[50%]'/>

            </div>
            <button className='button mx-auto bg-[#77ce8f]'>BUY NEW CLOTHES</button>
        </section>
    </>
  )
}

export default SectionThree