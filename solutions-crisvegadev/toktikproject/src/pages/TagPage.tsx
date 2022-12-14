import { NavLink, useParams } from 'react-router-dom'
import VideoCard from '../components/tagpage/VideoCard'
import useFetchData from '../hooks/useFetchData'
import VideoInterface from '../types/VideoInterface'
import { VscSettings } from 'react-icons/vsc'
import { IoArrowBackSharp } from 'react-icons/io5'

const TagPage = () => {
  const { tag } = useParams()

  const { list, loading } = useFetchData(1)

  return (
    <div className='bg-white h-fit'>
      <header className="h-14">
        <nav className="flex items-center justify-between h-full w-full">
          <button className="ml-4" onClick={
            () => {
              window.history.back()
            }
          }>
            <IoArrowBackSharp />
          </button>
          <input
            type="text"
            className="rounded-full w-full h-8 mx-4 px-4 text-sm bg-gray-100"
            readOnly
            value={`#${tag}`} />
          <button className="mr-4">
            <VscSettings />
          </button>
        </nav>
      </header>
      <div className='flex mb-2 border-b border-gray-200'>
        <span className='mx-2 py-1 border-b-2 border-black px-2 font-medium'>Top</span>
        <span className='mx-2 py-1 border-b-2 border-white text-gray-400 font-medium'>Users</span>
        <span className='mx-2 py-1 border-b-2 border-white text-gray-400 font-medium'>Videos</span>
        <span className='mx-2 py-1 border-b-2 border-white text-gray-400 font-medium'>Sounds</span>
        <span className='mx-2 py-1 border-b-2 border-white text-gray-400 font-medium'>LIVE</span>
        <span className='mx-2 py-1 border-b-2 border-white text-gray-400 font-medium'>Hashtags</span>
      </div>
      <div>
        { loading || list.length === 0
          ? <></>
          : <>
            <div className="grid grid-cols-2">
              {list.map((video: VideoInterface) => {
                return (
                  <NavLink to={`/@${video.author.username.toLocaleLowerCase()}/video/${video.id}`} key={video.id}>
                    <VideoCard key={video.id} video={video} />
                  </NavLink>
                )
              })}
            </div>
          </>}

      </div>
    </div>
  )
}

export default TagPage
