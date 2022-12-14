import { FormEventHandler, RefObject, TouchEventHandler } from 'react'

const VideoProgress = ({ isLoading, progress, touchEnd, touchStart, updateProgressbar, show, timeElapsed, duration, showProgress }: {
  reft: RefObject<HTMLVideoElement>,
  isLoading: boolean,
  progress: number,
  touchEnd: TouchEventHandler,
  touchStart: TouchEventHandler,
  updateProgressbar: FormEventHandler,
  show: boolean,
  timeElapsed: string,
  duration: string,
  showProgress: boolean
}) => {
  return (
    <>
    { showProgress
      ? <div className={''}>
      <div className={(show ? '' : 'hidden') + ' text-white text-3xl transition mx-auto absolute bottom-5 w-screen text-center'}>
        <div className="mx-auto">
          <span className='text-white'>{timeElapsed}</span>
          <span className='mx-2'>/</span>
          <span className='text-white opacity-70'>{duration}</span>
        </div>
      </div>
      <div className={(isLoading ? 'flex' : 'hidden') + ' h-[1px] justify-center items-center bottom-[0px] w-full absolute'}>
        <div className="ss h-full bg-gray-200"></div>
      </div>
       <input
        type="range"
        min="0"
        max="100"
        value={progress}
        readOnly
        className={(isLoading ? 'opacity-0' : 'opacity-100') + ' absolute w-full bottom-[0px] transition-all ease-linear left-0 z-30'}
        onTouchEnd={touchEnd}
        onTouchStart={touchStart}
        onInput={updateProgressbar} />
    </div>
      : <></> } </>
  )
}

export default VideoProgress
