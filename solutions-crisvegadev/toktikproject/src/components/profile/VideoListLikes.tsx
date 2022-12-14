import { NavLink, useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import VideoInterface from '../../types/VideoInterface'
import VideoCard from './VideoCard'

const VideoListLikes = ({ page }: {
  page: number
}) => {
  const { loading, list } = useFetchData(page)
  const { username, likes } = useParams()

  return (
    <div className='mt-2 mx-auto grid grid-cols-3'>
      {
        loading
          ? (
            <div className="w-full text-center">
              <span className="text-gray-700 text-sm">Loading...</span>
            </div>
            )
          : (list.map((video: VideoInterface) => {
              return (
              <NavLink to={`/@${username}/video/${video.id}#${likes}`} key={video.id}>
                <VideoCard key={video.id} video={video} />
              </NavLink>
              )
            }))
      }
    </div>
  )
}

export default VideoListLikes
