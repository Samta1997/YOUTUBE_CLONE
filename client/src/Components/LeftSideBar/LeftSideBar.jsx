import { useState } from "react";
import { MdHome,MdOutlineHome,MdOutlineSubscriptions,MdSubscriptions,MdOutlineVideoLibrary,MdOutlineWatchLater, MdOutlineHistory } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { AiFillLike, AiFillPlaySquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";



const LeftSideBar = () => {
    const [hIcon, setHicon]=useState(false)
    const [sIcon, setSicon]=useState(false)
    
    const changeHIcon=()=>{
        setHicon(!hIcon)
    }
    const changeSIcon=()=>{
        setSicon(!sIcon)
    }

  return (
    <div className='text-white inline-block w-[235px] flex-col px-l-4 sm:px-6 lg:px-l-8 text-sm font-sans-serif bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'>
        <div className='flex-col'>
            <NavLink to={'/'}>
            <div 
                className='p-2 hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg  font-normal visited:font-bold flex items-center'
                onClick={changeHIcon}
            >
                {hIcon? <MdOutlineHome className="mr-3 text-2xl "/>:<MdHome className="mr-3 text-2xl"/>}
                Home
            </div>
            </NavLink>

            <div 
                className='flex p-2 hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg  font-normal visited:font-bold'
            >
                <SiYoutubeshorts className="mr-3 text-2xl"/>
                Short
            </div>
            <div 
                className='flex p-2 hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg  font-normal visited:font-bold'
                onClick={changeSIcon}
            >
                {!sIcon? <MdOutlineSubscriptions className="mr-3 text-2xl "/>:<MdSubscriptions className="mr-3 text-2xl"/>}    
                Subscription
            </div>
        </div>

        <div className='border-b my-2 border-white'></div>

        <div className='flex-col p-2 font-bold'>
            <div className="mb-2">You</div>
            <NavLink to={'/library'}>
            <div className='py-2 px-1 flex hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg  font-normal visited:font-bold'>
                <MdOutlineVideoLibrary className="mr-3 text-2xl"/>
                Library
            </div>
            </NavLink>
            <NavLink to={'/history'}>
            <div className='py-2 px-1 flex hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg text-sm  font-normal visited:font-bold'>
                <MdOutlineHistory className="mr-3 text-2xl"/>
                History
            </div>
            </NavLink>
            <NavLink to={'/yourvideos'}>
            <div className='py-2 px-1 flex hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg text-sm  font-normal visited:font-bold'>
                <AiFillPlaySquare className="mr-3 text-2xl"/> 
                Your Videos
            </div>
            </NavLink>
            <NavLink to={'/liked'}>
            <div className='py-2 px-1 flex hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg  font-normal visited:font-bold'>
                <AiFillLike className="mr-3 text-2xl"/>
                Liked Videos
            </div>
            </NavLink>
            <NavLink to={'/watchlater'}>
            <div className='py-2 px-1 flex hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 rounded-lg text-sm  font-normal visited:font-bold'>
                <MdOutlineWatchLater className="mr-3 text-2xl"/>
                Watch Later
            </div>
            </NavLink>
        </div>

        <div className='border-b my-2 border-white'></div>

        <div className='p-2 font-bold flex-col'>Subscription
            <div className='flex font-normal items-center'>
                <div className="cursor-pointer my-3 mr-3 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>Channel Name
            </div>
            <div className='flex font-normal items-center'>
                <div className="cursor-pointer my-3 mr-3 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>Channel Name
            </div>
            <div className='flex font-normal items-center'>
                <div className="cursor-pointer my-3 mr-3 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>Channel Name
            </div>
            <div className='flex font-normal items-center'>
                <div className="cursor-pointer my-3 mr-3 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>Channel Name
            </div>
            <div className='flex font-normal items-center'>
                <div className="cursor-pointer my-3 mr-3 relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>Channel Name
            </div>
        </div>




    </div>
   
  )
}

export default LeftSideBar