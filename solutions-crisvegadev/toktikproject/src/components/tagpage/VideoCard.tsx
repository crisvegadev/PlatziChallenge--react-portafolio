import VideoInterface from '../../types/VideoInterface'
import { MdFavoriteBorder } from 'react-icons/md'

const VideoCard = ({ video }: {
  video: VideoInterface
}) => {
  const { author, description, stats, url } = video

  return (
    <div className="w-full px-2">
      <div className=" bg-gray-100 h-64 overflow-hidden rounded-md">
        <video
          src={url}
          muted
          className='w-full h-full object-cover'></video>
      </div>
      <div className="p-2">
        <p className="text-xs font-bold overflow-hidden">{description.slice(0, 36)}...</p>
        <div className="flex items-center mt-1 text-xs justify-between">
          <div className="flex items-center justify-between">
            <img src={author.avatar} alt="" width={25} className="rounded-full" />
            <span className="ml-1">{author.username.toLocaleLowerCase()}</span>
          </div>
          <div className="flex items-center ">
            <MdFavoriteBorder />
            <span className="mx-1">{stats.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
