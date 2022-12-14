import { useCallback, useRef, useState } from 'react'
import useFetchData from '../hooks/useFetchData'
import VideoInterface from '../types/VideoInterface'
import CommentSection from './CommentSection'
import VideoPlayer from './videoplayer/VideoPlayer'

const VideoFeed = () => {
  const [page, setPage] = useState(1)
  const { response, list, hasMore } = useFetchData(page)

  const observer = useRef<IntersectionObserver>()

  const lastVideoRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setPage((prevPage) => prevPage + 1)
      })
    })
    if (node) observer.current.observe(node)
  }, [])

  return (
    <div className='max-w-lg mx-auto'>
      <CommentSection />
      <div className="fixed bg-black flex-1 overflow-hidden w-full h-[calc(100%_-_4rem)] top-0 max-w-lg inset-x-0 mx-auto" id='video-feed'>
        <div className='h-full snap-mandatory snap-y overflow-scroll w-full' id="video-feed">
          {list.length > 0 &&
            list.map((video: VideoInterface) => <VideoPlayer key={video.id} videoData={video} />
            )}
          { response &&
            hasMore &&
              <div className="flex justify-center items-center h-20 m-auto" ref={lastVideoRef}>
            <img src="https://www.girlfriend.com.au/Branding/Girlfriend/images/loading.gif" alt="" width={40} height={40} />
          </div> }
        </div>
      </div>
    </div>
  )
}

export default VideoFeed
