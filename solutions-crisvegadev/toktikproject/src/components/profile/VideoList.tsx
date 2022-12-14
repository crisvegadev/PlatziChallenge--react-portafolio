import { NavLink, useOutletContext, useParams } from 'react-router-dom'
import VideoInterface from '../../types/VideoInterface'
import VideoCard from './VideoCard'

const VideoList = () => {
  const { username } = useParams()
  const list: VideoInterface[] = useOutletContext()

  return (
    <div className='mt-2 mx-auto grid grid-cols-3 bg-white'>
      {
        list.length === 0
          ? (
            <div className="w-full text-center">
              <span className="text-gray-700 text-sm">Loading...</span>
            </div>
            )
          : (list.map((video: VideoInterface) => {
              return (
                <NavLink to={`/@${username}/video/${video.id}`} key={video.id}>
                  <VideoCard key={video.id} video={video} />
                </NavLink>
              )
            }))
      }
    </div>
  )
}

export default VideoList
