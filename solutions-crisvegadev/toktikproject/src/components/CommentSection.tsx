import { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CommentContext from '../hooks/CommentContext'
import useFetchComments from '../hooks/useFetchComments'
import Comment from '../types/Comment'
import CommentCard from './CommentCard'
import Loader from './global/Loader'

const CommentSection = () => {
  const { show, setShow, videoId } = useContext(CommentContext)
  const [videoDataId, setVideoDataId] = useState<string>('')

  const { loading, list } = useFetchComments(videoDataId)

  useEffect(() => {
    if (videoId) setVideoDataId(videoId)
  }, [videoId])

  return (
    <div className={(show ? ' h-screen translate-y-0' : 'h-0 translate-y-full') + ' bg-black bg-opacity-20 w-full z-50 relative flex items-end transition ease-in-out '} style={{
      zIndex: 60
    }} >
      <div className={'bg-white h-4/5 w-full rounded-lg overflow-hidden'} >
        <div className='p-2 flex justify-between items-center'>
          <span className='flex-1 font-bold text-xs w-full text-center pl-5'>3581 comments</span>
          <button onClick={ () => setShow(false) }>
            <AiOutlineClose />
          </button>
        </div>
        <div className="px-2 overflow-y-scroll max-h-full pb-6 h-full">
         { loading
           ? <div className='h-full w-full flex items-center justify-center '>
            <Loader />
           </div>
           : <div>
              {list.map((item: Comment, index: number) => {
                return <CommentCard key={index} comment={item} />
              })}

          </div>}
        </div>
      </div>
    </div>
  )
}

export default CommentSection
