import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav className="  h-20 wrapper  lg:w-[80%] items-center justify-between flex ">
          <a href="./" className=" w-1/3 max-w-[140px]">
            <h3 className=" text-xl font-bold text-[#083555] tracking-[5px]">
              CLOTHING
            </h3>
          </a>

          <input type="checkbox" id="menu" className="peer hidden" />

          <label
            htmlFor="menu"
            className=" bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
          ></label>

          <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none z-20">
            <ul className=" absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md-p-0 md:grid-flow-col md:static md:shadow-none">
              <li>
                <a href="#">Princing</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          <a href="#" className="button hidden lg:block py-3 text-sm">
            Get Started
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
