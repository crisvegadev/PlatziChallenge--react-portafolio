import { BaseSyntheticEvent, RefObject, useEffect, useState } from 'react'

const useProgressbar = (video: RefObject<HTMLVideoElement>, handleShow: () => void) => {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  const { current: videoElement } = video

  const handleTimeUpdate = () => {
    if (videoElement) {
      setProgress((videoElement.currentTime / videoElement.duration) * 100)
    }
  }

  const timeToMS = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time - minutes * 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  useEffect(() => {
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate)
      videoElement.volume = 0.1
    }
  }, [videoElement])

  const touchEnd = () => {
    if (videoElement) {
      videoElement.currentTime = currentTime
      setShow(false)
      handleShow()
      videoElement.play()
    }
  }

  const touchStart = () => {
    if (videoElement) {
      setShow(true)
      handleShow()
      videoElement.pause()
    }
  }

  const updateProgressbar = (e: BaseSyntheticEvent<Event, HTMLInputElement>) => {
    if (videoElement) {
      // calculate time to set with movement of progress bar
      setCurrentTime(((parseInt(e.currentTarget.value) / 100) * videoElement!.duration))

      // update progress bar
      setProgress(parseInt(e.currentTarget.value))

      // update time elapsed
      setTimeElapsed(currentTime)
    }
  }

  return {
    progress,
    show,
    timeElapsed,
    timeToMS,
    touchEnd,
    touchStart,
    updateProgressbar
  }
}

export default useProgressbar
