import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdVideoCall,MdNotifications } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import SearchList from './SearchList';
import SignInForm from '../SignInForm/SignInForm';

const Navbar = ({leftSideBar,setLeftSideBar}) => {
  const [isOpen, setIsOpen] = useState(false);  
  const [profile, setProfile]=useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [seachListA, setSeachList] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  let TitleArray=['video1','video2','vedio3'].filter(q=>q.includes(searchQuery))

  const showLeftSideBar=()=>{  //toggle between leftSide Bar - smaller and bigger
    setLeftSideBar(!leftSideBar)
  };

  const toggleSearch = () => {  //it is used when screen size is of mobile size 
    setIsOpen(!isOpen);
  };
  
  const toggleProfile=()=>{  //used when user is logged in and click on profile button 
    setProfile(!profile);
  }

  const handleSignInClick = () => { //used when clicking on sign in is clicked
    setShowSignInForm(!showSignInForm);
  };

  const CurrentUser=null;
//     const CurrentUser = {
//     result: {
//       email: "abzxy50312@gmail.com",
//       joinedOn: "2222-07-15T09:57:23.489Z",
//     },
//   };
  
  return (
    <nav>
        <div className="mx-auto px-4 sm:px-6 lg:px-8  shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex justify-between h-16 ">
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
                        <NavLink to={'/'}>
                            <img
                                className="h-6 w-auto cursor-pointer"
                                src="logo.png"
                                alt="Logo"
                            />
                        </NavLink>
                    </div>
                </div> 
                {/* Search Bar */}
                <div className='flex sm:w-4/12 items-center' >    
                    <div className="flex w-full">
                        <div >
                            <input
                            type="text"
                            onChange={(e)=>setSearchQuery(e.target.value)}
                            onClick={(e)=>setSeachList(true)}
                            placeholder="Search..."
                            className="hidden md:block h-9 w-full px-6 pb-1 bg-white text-black rounded-l-full border border-white focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-600 "
                            />
                        { 
                            searchQuery&& seachListA &&
                            <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray}/>
                        }
                        </div>
                   
                    <button className="hidden md:block h-9 text-xl bg-white text-black py-2 px-4 rounded-r-full border-3 border-grey-600">
                        <CiSearch className="h-6 w-8"/>
                    </button>
                    </div>
                </div>
                {/* right navbar */}
                <div className='flex gap-8 items-center text-white '>
                {!isOpen &&(  //used when changing screen where screen size is large
                    <>
                        <CiSearch className='cursor-pointer h-6 w-6 md:hidden'onClick={toggleSearch}/>
                      
                        {CurrentUser?(<>
                
                            <NavLink to={'/videocall'}>
                                <MdVideoCall className='h-8 w-8 cursor-pointer' />
                            </NavLink>
                            <MdNotifications  className='h-7 w-7 cursor-pointer'/>
                            <div onClick={toggleProfile} className="cursor-pointer relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                            {
                                profile && <div className='flex-col mt-16 px-8 absolute w-56 right-0 top-0 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 p-4'>
                                    <div className='font-bold'>abc@gmail.com</div>
                                    <div className='border-b my-2 border-white   '></div>
                                    <NavLink to={'/channel/:cid'}>
                                    <div className='m-0 hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 p-2 rounded-md'>Your Channel</div>
                                    </NavLink>
                                    <div className='border-b my-2 border-white '></div>
                                
                                    <div className=' hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 p-2 rounded-md'>Logout</div>
                                    
                                </div>
                            }
                        
                        </>):(<>
                        
                            

                            <div className="flex justify-center items-center h-screen">
                                {!showSignInForm ? (
                                    <button
                                    onClick={handleSignInClick}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                    Sign In
                                    </button>
                                ) : (
                                    <SignInForm handleSignInClick={handleSignInClick}/>
                                )}
                            </div>
                        </>)}
                        </>
                    )}
                {
                    isOpen&&(//used  when mobile screen size
                        <>
                            <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e)=>setSearchQuery(e.target.value)}
                            onClick={(e)=>setSeachList(true)}
                            className="md:hidden h-9 w-full px-6 pb-1 text-white bg-black rounded-full border border-[#222222] focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-600"
                        />
                        <CiSearch className='h-6 w-6 ml-[-24px]'onClick={toggleSearch}/>
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