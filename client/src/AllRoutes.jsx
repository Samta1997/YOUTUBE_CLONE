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

const AllRoutes = ({leftSideBar}) => {
  
  return (
    <Routes>
        <Route path='/' element={<Home leftSideBar={leftSideBar}/>}/>
        <Route path='/liked' element={<LikedVideos/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/youvideos' element={<YourVideos/>}/>
        <Route path='/videopage/:vid' element={<VideoPage leftSideBar={leftSideBar}/>}/>
        <Route path='/channel' element={<Channel/>}/>
        <Route path='/videocall' element={<VideoCall/>}/>
        <Route path='/upload' element={<Upload/>}/>
    </Routes>
  )
}

export default AllRoutes