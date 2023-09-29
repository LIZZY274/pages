import React from "react";
import clothing from '../../assets/imagenes/clothing.svg'


function SectionOne() {
  return (
    <>
      <section className=" relative wrapper lg:w-[100%] grid gap-8 justify-items-center pb-12 items-center md:grid-cols-2 md:py-24 z-10">
        <div className=" absolute top-10">
          <img className=" hidden md:flex" src="" alt="" />
        </div>
        <img
          className=" absolute bottom-[-10%] left-2 w-14  md:-bottom-8 md:left-[37%] md:w-[7  %] md:w-22 lg:bottom-1 md:right-2/4 lg:right-2/4 "
          src=""
          alt=""
        />
        <img
          src={clothing}
          alt=""
          className=" -z-10 w-[223.69px] md:w-full md:max-w-lg md:order-1"
        />
        <img
          className=" absolute w-12 bottom-12 right-2 lg:w-[9%] lg:right-[52px] lg:bottom-20"
          src=""
          alt=""
        />

        <article className=" relative text-center space-y-7 md:text-left md:space-y-8">
          <img
            className=" absolute top-8 md:top-[-40px] -left-14 md:left-0 lg:top-[-40px] w-12 lg:w-[30%] md:w-[24%]"
            src=""
            alt=""
          />
          <h1 className=" inline-block w-full borderjustify-items-center lg:max-w-[370px] text-4xl max-w-[200px]  md:text-start font-bold text-[#000] md:text-5xl lg:text-6xl ">
            Descubre el Estilo que te Define
          </h1>
          <p className="lg:max-w-[330px] text-center md:text-start max-w-[190px] ">
            Explora una Colección Exclusiva para Crear Tu Look Único.
          </p>
          <a href="#" className="button text-lx mx-auto inline-block md:mx-0">
            Get Started
          </a>
          <div className="flex flex-row items-center gap-8 w-full justify-center md:justify-start lg:justify-start ">
            <a className="hover:translate-y-2 transition-transform" href="#">
              <img src="" alt="" />
            </a>
            <a className="hover:translate-y-2 transition-transform" href="#">
              <img src="" alt="" />
            </a>
            <a className="hover:translate-y-2 transition-transform" href="#">
              <img src="" alt="" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}

export default SectionOne;
