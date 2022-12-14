import { RefObject, useEffect, useRef, useState } from 'react'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'
import useProgressbar from '../../hooks/useProgressbar'
import VideoInterface from '../../types/VideoInterface'
import PlayOverlay from './PlayOverlay'
import VideoProgress from './VideoProgress'
import VideoSidebar from './sidebar/VideoSidebar'
import VideoData from './VideoData'

interface Props {
  videoData: VideoInterface,
}

const VideoPlayer = ({ videoData }: Props) => {
  const video = useRef<HTMLVideoElement>(null)

  const [refState, setRefState] = useState<RefObject<HTMLVideoElement>>(video)
  const { isPlaying, handlePlay } = useIntersectionVideoPlayer({ video: refState || video })

  const [showVideoData, setShowVideoData] = useState(false)
  const [showLoading, setShowLoading] = useState(false)

  const toggleVideoData = () => setShowVideoData(!showVideoData)

  const {
    progress,
    show,
    timeElapsed,
    timeToMS,
    touchEnd,
    touchStart,
    updateProgressbar
  } = useProgressbar(video, toggleVideoData)

  useEffect(() => {
    if (video.current) setRefState(video)
  }, [videoData])

  return (
    <div className='relative snap-start overflow-hidden h-full snap-always'>
      <PlayOverlay
        showPlay={!isPlaying}
        toggleVideo={handlePlay} />

      <div className="flex absolute bottom-0 right-0 flex-row-reverse items-end justify-between w-full" >

        <VideoSidebar
          video={videoData}
          hidden={showVideoData} />

        <VideoData
          video={videoData}
          hidden={showVideoData} />

        <VideoProgress
          progress={progress}
          show={show}
          timeElapsed={timeToMS(timeElapsed)}
          duration={timeToMS(video.current?.duration!)}
          touchEnd={touchEnd}
          touchStart={touchStart}
          updateProgressbar={updateProgressbar}
          reft={video}
          isLoading={showLoading}
          showProgress={isPlaying} />

      </div>
      {<video
        id={videoData.id}
        onContextMenu={(e) => e.preventDefault()}
        onWaiting={() => setShowLoading(true)}
        onCanPlay={() => setShowLoading(false)}
        className="video-element object-cover h-full w-full mx-auto z-40 sm:object-contain"
        loop
        ref={video}
        preload='none'
        onClick={handlePlay}>
          <source src={videoData.url} type="video/mp4" />

          <p>Your browser doesnt support HTML5 video.</p>

      </video>}
    </div>
  )
}

export default VideoPlayer
