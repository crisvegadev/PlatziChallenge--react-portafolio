import BottomNavbar from '../components/global/BottomNavbar'
import Navbar from '../components/global/Navbar'
import VideoFeed from '../components/VideoFeed'

const HomePage = () => {
  return (
    <div className=''>
      <Navbar />
      <VideoFeed />
      <BottomNavbar />
    </div>
  )
}

export default HomePage
