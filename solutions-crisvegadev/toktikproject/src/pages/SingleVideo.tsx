import { useParams } from 'react-router-dom'
import VideoPlayer from '../components/videoplayer/VideoPlayer'
import useGetSingleVideo from '../hooks/useGetSingleVideo'
import { BsEmojiLaughing } from 'react-icons/bs'
import { AiOutlineGift } from 'react-icons/ai'
import { FaAt } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'

const SingleVideo = () => {
  const { videoId } = useParams()
  const { loading, video } = useGetSingleVideo(videoId!)

  return (
    loading
      ? <div>Loading...</div>
      : <>
        <div className='h-[calc(100vh_-_3rem)]'>
          <div className='fixed w-full h-8 z-50 flex items-center top-0 left-0 pt-5 pl-5'>
            <button className='flex items-center' onClick={() => window.history.back()}>
              <IoArrowBackOutline className='h-6 w-6 text-white' />
            </button>
          </div>
          <VideoPlayer videoData={video!} />
          <div className='fixed h-12 flex items-center w-full bg-black max-w-md mx-auto'>
            <div className='w-full ml-4 pr-4'>
              <button className='w-full h-full py-1 px-2 mr-4 text-white text-opacity-20 text-left text-sm outline-none'>
                Add comment...
              </button>
            </div>
            <div className='flex text-xl'>
              <div className="flex-col flex justify-center items-center mx-2">
                <FaAt fill='#A2A2A2' />
              </div>
              <div className="flex-col flex justify-center items-center mx-2 text-2xl">
                <AiOutlineGift fill='#A2A2A2' />
              </div>
              <div className="flex-col flex justify-center items-center mx-2">
                <BsEmojiLaughing fill='#A2A2A2' />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default SingleVideo
