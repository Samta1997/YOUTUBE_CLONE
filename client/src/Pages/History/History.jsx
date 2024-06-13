import vid from '../Home/sample.mp4'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import LeftSideBar1 from '../../Components/LeftSideBar/LeftSideBar1';
import WHL from '../../Components/WHL/WHL';

const History = ({leftSideBar}) => {
  
  const historyList = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
  ];

  return (
    <div className='flex'>
      {leftSideBar?<LeftSideBar/>:<LeftSideBar1/>}
      <div className='w-full'>
        <WHL page={"History"} vids={historyList}/> 
      </div>
    </div>
  )
}

export default History