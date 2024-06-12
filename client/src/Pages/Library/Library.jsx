import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar"
import LeftSideBar1 from "../../Components/LeftSideBar/LeftSideBar1"

const Library = ({leftSideBar}) => {
  return (
    <div className='flex'>
        {leftSideBar?<LeftSideBar/>:<LeftSideBar1/>}
       
    </div>
  )
}

export default Library