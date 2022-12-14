import VideoInterface from '../../types/VideoInterface'

const VideoData = ({ video, hidden }: {
  video: VideoInterface,
  hidden: boolean
}) => {
  const replaceHastags = (text: string) => {
    const at = text.replace(/@(\w+)/g, '<a href="/@$1" class="text-white font-bold">@$1</a>')
    return at.replace(/#(\w+)/g, '<a href="/tags/$1" class="text-white font-bold">#$1</a>')
  }

  const { author, description, song, date } = video

  return (
    <div className={(hidden ? 'opacity-0' : 'opacity-100') + ' p-2 z-30  transition duration-500 left-0 w-full'}>
      <div className="flex items-center">
        <h1 className='text-white text-sm font-bold' >{author.name}</h1>
        <span className="font-bold mx-1 text-xs text-white">●</span>
        <span className="text-white opacity-75 text-xs">{date}</span>
      </div>
      <div className="flex mt-2">
        <p className="text-white text-ellipsis overflow-hidden text-xs"
          dangerouslySetInnerHTML={{ __html: replaceHastags(description) }} />
      </div>
      <div className="flex items-center mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="">
          <path fill="white" d="M2 12c.229-6.013 4.042-11 10-11s9.771 4.987 10 11h-2c-.256-4.918-3.539-8.031-8-8.022-4.461-.009-7.744 3.104-8 8.022h-2zm22 4.039c0-1.126-.913-2.039-2.039-2.039h-2.961v9h2.961c1.126 0 2.039-.913 2.039-2.039v-4.922zm-24 0c0-1.126.913-2.039 2.039-2.039h2.961v9h-2.961c-1.126 0-2.039-.913-2.039-2.039v-4.922z" />
        </svg>
        <div className="" >
          <span className="ml-2 text-white text-xs" >
            {`${song.name} - ${song.artist}`.length > 40 ? `${song.name} - ${song.artist}`.substring(0, 40) + '...' : `${song.name} - ${song.artist}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default VideoData
