import { useState } from "react";

export default function NavBar() {

  return (
    <header className="w-full h-[14vh] flex items-center justify-between px-6 md:px-10">
      <p className="w-[183px] h-[43px] font-sans font-bold text-[32px] text-[#1c1c1c] leading-[43px]">
        My Tinerary
      </p>
      <div className="flex items-center space-x-4 md:space-x-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-8 h-8 cursor-pointer md:hidden"
        >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
        </svg>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px] font-bold" href="">
              Home
            </a>
            <a className="w-[69px] h-[32px] text-[24px] font-bold leading-[31.92px] font-bold" href="">
              Cities
            </a>
            <button className="flex items-center  w-[150px] h-[54px] bg-[#4f46e5] text-white text-[20px] font-bold py-[16px] px-[32px] rounded-[10px] leading-20px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6 inline mr-2"
              >
              <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Login
            </button>
          </nav>
      </div>
    </header>
  );
}
