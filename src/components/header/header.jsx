import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="text-center h-screen pt-20 px-10" >
      <div className=" h-[90%] flex items-center pl-10 rounded-t-xl  object-fill object-center" style={{ backgroundImage: 'url("https://brok.qodeinteractive.com/wp-content/uploads/2021/11/h1-port-list-img-1-3-1536x774.jpg")' }}>
        <div className="flex flex-col text-start">

          <div className="flex  gap-20">
            <div className="flex flex-col gap-5 items-center justify-center text-white">
              <FaInstagram size={20} />
              <FaFacebook size={20} />
              <FaTiktok size={20} />
              <FaLinkedin size={20} />
            </div>
            <div className="">
              <h1 className="text-9xl font-bold text-white mb-4">
                HARMONY OF
              </h1>
              <h1 className="text-9xl font-bold text-white mb-4">
                SHAPES</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-16 right-10 p-4 h-28  w-96  bg-white">
        <div>
          <h1 className=" font-semibold">01</h1>
          <h1>Future city buildings</h1>
          <h1>Housing</h1>
        </div>
        <div>
          <h1 className=" font-semibold">01</h1>
          <h1>Future city buildings</h1>
          <h1>Housing</h1>
        </div>
        <div>
          <h1 className=" font-semibold">01</h1>
          <h1>Future city buildings</h1>
          <h1>Housing</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;