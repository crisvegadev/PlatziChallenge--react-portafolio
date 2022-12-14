import { useState } from 'react'
import UserAction from './UserAction'

const LikeAction = ({ count }: {
  count: string
}) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(count)

  const handleAddLike = () => {
    setLiked(!liked)

    if (liked) {
      setLikes((parseInt(likes) - 1).toString())
    } else {
      setLikes((parseInt(likes) + 1).toString())
    }
  }

  return (
    <div >
      <UserAction dataNumber={likes} >
        <svg width="40px" height="40px" viewBox="0 0 48 48" fill={liked ? '#FE2C55' : 'white'} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z" fillOpacity="0.9" onClick={handleAddLike}></path></svg>
      </UserAction>
    </div>
  )
}

export default LikeAction
