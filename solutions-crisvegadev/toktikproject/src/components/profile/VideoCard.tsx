import VideoInterface from '../../types/VideoInterface'
import { BsPlayFill } from 'react-icons/bs'

const VideoCard = ({ video }:{
  video: VideoInterface
}) => {
  const { url } = video

  return (
    <div className="w-full h-48 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 flex left-0 text-white z-10 items-center p-1">
        <BsPlayFill className='bg-opacity-75 text-gray-200' />
        <span className="text-white text-xs ml-1">{video.stats.views}</span>
      </div>
      <video src={url} className="w-full h-full object-cover"></video>
    </div>
  )
}

export default VideoCard
