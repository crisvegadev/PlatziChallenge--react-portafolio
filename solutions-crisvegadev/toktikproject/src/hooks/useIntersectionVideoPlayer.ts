import { RefObject, useEffect, useState } from 'react'

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // more is reference to the top of the screen
}

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: any) => {
    if (entry.target._handleIntersect) {
      entry.target._handleIntersect(entry.isIntersecting)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)

const useIntersectionVideoPlayer = ({ video } : { video: any }) => {
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const { current: videoElement } = video

    if (!videoElement) {
      return
    }

    observer.observe(videoElement)

    videoElement._handleIntersect = (isIntersecting: boolean) => {
      const { current: videoEl } = video as RefObject<HTMLVideoElement>

      if (!videoEl) return

      if (isIntersecting) {
        const playPromise = videoEl.play()

        if (playPromise !== undefined) {
          playPromise.then(() => {
          }).catch(console.log)
        }
      } else {
        if (!videoEl.paused) {
          videoEl.pause()
        }
      }

      setIsPlaying(!videoEl.paused)
      videoEl.currentTime = 0
    }
  }, [video])

  const handlePlay = () => {
    const { current: videoEl } = video

    isPlaying ? videoEl!.pause() : videoEl!.play()

    setIsPlaying(!isPlaying)
  }

  return { handlePlay, isPlaying }
}

export default useIntersectionVideoPlayer
