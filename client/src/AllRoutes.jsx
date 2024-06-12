import {Routes, Route} from 'react-router-dom' 
import Home from './Pages/Home/Home'
import LikedVideos from './Pages/LikedVideos/LikedVideos'
import Library from './Pages/Library/Library'
import WatchLater from './Pages/WatchLater/WatchLater'
import YourVideos from './Pages/YourVideos/YourVideos'
import Channel from './Pages/Channel/Channel'
import VideoCall from './Pages/VideoCall/VideoCall'
import Upload from './Pages/Upload/Upload'
import VideoPage from './Pages/VideoPage/VideoPage'
import Search from './Pages/Search/Search'
import Room from './Pages/Room/Room'
import History from './Pages/History/History'

const AllRoutes = ({leftSideBar}) => {
  
  return (
    <Routes>
        <Route path='/' element={<Home leftSideBar={leftSideBar}/>}/>
        <Route path='/liked' element={<LikedVideos leftSideBar={leftSideBar}/>}/>
        <Route path='/history' element={<History leftSideBar={leftSideBar}/>}/>
        <Route path='/library' element={<Library leftSideBar={leftSideBar}/>}/>
        <Route path='/watchlater' element={<WatchLater leftSideBar={leftSideBar}/>}/>
        <Route path='/yourvideos' element={<YourVideos/>}/>
        <Route path='/videopage/:vid' element={<VideoPage leftSideBar={leftSideBar}/>}/>
        <Route path='/channel/:Cid' element={<Channel/>}/>
        <Route path='/videocall' element={<VideoCall/>}/>
        <Route path='/upload' element={<Upload leftSideBar={leftSideBar}/>}/>
        <Route path="/seacrh/:searchQuery" element={<Search />} />
        <Route path='/room/:roomId'  element={<Room/>}/>
    </Routes>
  )
}

export default AllRoutes