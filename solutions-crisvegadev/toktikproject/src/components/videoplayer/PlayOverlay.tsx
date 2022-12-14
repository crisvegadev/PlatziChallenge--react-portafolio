const PlayOverlay = ({ showPlay, toggleVideo }: {
  showPlay: boolean,
  toggleVideo: () => void
}) => {
  return (
    <div
      className={(showPlay ? 'flex' : 'hidden') + ' w-full h-full absolute z-10 justify-center items-center top-0 '}
      onClick={() => toggleVideo()}>
      <svg
        className={'w-12 h-12 text-white cursor-pointer transition'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" fill="white" />
      </svg>
    </div>
  )
}

export default PlayOverlay
