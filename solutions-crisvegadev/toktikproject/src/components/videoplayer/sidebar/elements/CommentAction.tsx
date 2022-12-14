import { useContext } from 'react'
import CommentContext from '../../../../hooks/CommentContext'
import UserAction from './UserAction'

const CommentAction = ({ count, videoIdParam }: {
  count: string,
  videoIdParam: string
}) => {
  const { setShow, setVideoId } = useContext(CommentContext)

  return (
    <UserAction dataNumber={count}>
      <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={
        () => {
          setShow(true)
          setVideoId(videoIdParam)
        }
      }>
        <path fillRule="evenodd" clipRule="evenodd" d="M38.4943 35.3128C42.6 31.2 45 26.9162 45 21.928C45 11.8056 35.733 3.60001 24.2999 3.60001C12.8671 3.60001 3.6 11.8056 3.6 21.9283C3.6 32.051 13.1669 39 24.6 39V42.3569C24.6 43.4205 25.7028 44.105 26.638 43.5983C29.5598 42.015 34.9741 38.8392 38.4943 35.3128ZM14.2446 19.4564C15.8786 19.4564 17.2031 20.7714 17.2031 22.3912C17.2031 24.0142 15.8786 25.3291 14.2446 25.3291C12.6134 25.3291 11.2888 24.0142 11.2888 22.3912C11.2888 20.7714 12.6134 19.4564 14.2446 19.4564ZM27.2572 22.3912C27.2572 20.7714 25.9332 19.4564 24.3 19.4564C22.667 19.4564 21.3429 20.7714 21.3429 22.3912C21.343 24.0142 22.6671 25.3291 24.3 25.3291C25.9332 25.3291 27.2572 24.0142 27.2572 22.3912ZM34.355 19.4564C35.9887 19.4564 37.3113 20.7714 37.3113 22.3912C37.3113 24.0142 35.9888 25.3291 34.355 25.3291C32.7213 25.3291 31.3969 24.0142 31.397 22.3912C31.397 20.7714 32.7214 19.4564 34.355 19.4564Z" fill="white"></path>
      </svg>
    </UserAction>
  )
}

export default CommentAction