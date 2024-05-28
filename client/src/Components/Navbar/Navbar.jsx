import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdVideoCall,MdNotifications } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[leftSideBar, setLeftSideBar] = useState(false)
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  const showLeftSideBar=()=>{
    setLeftSideBar(!leftSideBar)
  }
  return (
    <nav className="bg-black shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    {/* Menu Button */}
                    <div className="flex ">
                        <button
                        onClick={showLeftSideBar}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-white"
                        >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            {leftSideBar ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            )}
                        </svg>
                        </button>
                    </div>
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center ml-3">
                    <img
                        className="h-6 w-auto cursor-pointer"
                        src="logo.jpg"
                        alt="Logo"
                    />
                    </div>
                </div> 
                {/* Search Bar */}
                <div className='flex sm:w-4/12 items-center' >    
                    <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block h-9 w-full px-6 pb-1 text-white bg-black rounded-l-full border border-[#222222] focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-600"
                    />
                    <button className="hidden md:block h-9 text-xl bg-[#222222] text-white py-2 px-4 rounded-r-full border-3 border-grey-600">
                        <CiSearch className="h-6 w-8"/>
                    </button>
                    </div>
                </div>
                {/* right navbar */}
                <div className='flex gap-8 items-center text-white '>
                {!isOpen &&(
                    <>
                        <CiSearch className='cursor-pointer h-6 w-6 md:hidden'onClick={toggleSearch}/>
                        <MdVideoCall className='h-8 w-8 cursor-pointer' />
                        <MdNotifications className='h-7 w-7 cursor-pointer'/>
                        <div className="cursor-pointer relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        </>
                    )}
                {
                    isOpen&&(
                        <>
                            <input
                            type="text"
                            placeholder="Search..."
                            className="md:hidden h-9 w-full px-6 pb-1 text-white bg-black rounded-full border border-[#222222] focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-600"
                        />
                        <CiSearch className='h-6 w-6'onClick={toggleSearch}/>
                        </>
                    )
                }
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;