import React from 'react'
import puntosAs from '../../assets/Texturas/puntosAs.svg'
import woman2 from '../../assets/imagenes/woman2.jpg'
import CardOfer from '../molecules/CardOfer'
import woman4 from '../../assets/imagenes/woman4.jpg'
import woman3 from '../../assets/imagenes/woman3.jpg'

function SectionTwo() {
  return (
    <>
        <section className=' wrapper flex flex-col gap-10 p-9' >
            <div className='text-center'>
                <div className=' bg-[#CBECD4] p-2 w-[100%]  '>
                    <h1 className=' text-[#4a8549] tracking-[5px] font-bold text-4xl'>SHOP STORE</h1>
                </div>
                <h3 className=' text-[#4a8549] font-bold text-xl tracking-[4px]'>--CHRISTMAS--</h3>

                <h3 className=' text-[#4a8549] font-medium tracking-[6px] text-2xl py-6'>POPULAR PRODUCTS</h3>
                <img src={puntosAs} alt="" className='mx-auto' />
            </div>

            <div className='flex flex-row gap-14 justify-center items-center flex-wrap rounded-lg'>
                <CardOfer images={woman2}/>
                <CardOfer images={woman4}/>  
                <CardOfer images={woman3}/>
            </div>

            <button className='button mx-auto bg-[#77ce8f] '>BUY NEW CLOTHES</button>
        </section>
    </>
  )
}

export default SectionTwo