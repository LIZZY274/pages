import React from "react";
import Oferta from '../../assets/Texturas/Oferta.png'



function CardOfer({images}) {
  return (
    <>
      <article className="relative w-[300px] h-[350px] rounded-sm border-2 border-[#000]">
        <img src={Oferta} alt="" className=" absolute -top-7 -right-7 w-14 " />
        <img
          src={images}
          alt=""
          className="w-full h-full object-cover object-center "
        />
      </article>
    </>
  );
}

export default CardOfer;
