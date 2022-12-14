import { useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { SlDislike } from 'react-icons/sl'
import Comment from '../types/Comment'

const CommentCard = ({ comment }:{
  comment: Comment
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [likes, setLikes] = useState<number>(parseInt(comment.likes))

  return (
    <div className="flex items-start my-4" >
    <img src={'./logo192.png'} alt='pp' className="rounded-full mr-2 bg-slate-200 w-11 h-11" />
    <div className="px-1">
      <span className="text-xs text-gray-700 font-bold">{comment.author.name}</span>
      <p className="text-sm">{comment.content}</p>
      <div className="flex justify-between mt-1">
        <div className=''>
          <span className='text-xs'>30m</span>
          <button className='font-bold text-xs mx-2'>Reply</button>
        </div>
        <div className='flex'>
         <div className='flex mr-10 items-center'>
            {!isLiked
              ? <MdFavoriteBorder className='text-xl mr-1 ' onClick={
                () => {
                  setIsLiked(true)
                  setLikes(likes + 1)
                }
              }/>
              : <MdFavorite className='text-xl mr-1 text-red-500' onClick={
                () => {
                  setIsLiked(false)
                  setLikes(likes - 1)
                }
              }/>}
            <span className='text-xs font-medium'>{likes}</span>
         </div>
          <button>
            <SlDislike className='text-xl' onClick={
              () => {
                setIsDisliked(!isDisliked)
              }
            } />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CommentCard
