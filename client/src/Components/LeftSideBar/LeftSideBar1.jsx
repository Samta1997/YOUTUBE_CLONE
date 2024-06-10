import { MdHome,MdSubscriptions,MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { NavLink } from "react-router-dom";

const LeftSideBar1 = () => {
  return (
    <div className="px-l-4 inline-block w-20 flex-col bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-24 text-white">
        <div className="mx-4 py-3 flex-col hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500">
            <NavLink to={'/'}>
                <MdHome className="mx-4 text-2xl"/>
                <div className="text-xs mx-3">Home</div>
            </NavLink>
        </div>
        <div className="mx-4 py-3 flex-col justify-center ">
            <SiYoutubeshorts className="mx-4 text-2xl"/>
            <div className="text-xs mx-3">Shorts</div>
        </div>
        <div className="mx-4 py-3 flex-col justify-center">
            <MdSubscriptions className="mx-4 text-2xl"/>
            <div className="text-xs mx-0.4">Subscription</div>
        </div>
        <div className="mx-4 py-3 flex-col justify-center">
            <MdOutlineVideoLibrary className="mx-4 text-2xl"/>
            <div className="text-xs mx-4">You</div>
        </div>
    </div>
  )
}

export default LeftSideBar1