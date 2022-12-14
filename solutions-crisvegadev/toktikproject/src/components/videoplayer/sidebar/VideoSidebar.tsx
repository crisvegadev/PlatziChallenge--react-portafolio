import { useState } from 'react'
import useCacheVideo from '../../../hooks/useCacheVideo'
import useDownloadVideo from '../../../hooks/useDownloadVideo'
import useNumbersToHuman from '../../../hooks/useNumbersToHuman'
import useShareData from '../../../hooks/useShareFile'
import VideoInterface from '../../../types/VideoInterface'
import DownloadOverlay from '../../DownloadOverlay'
import CommentAction from './elements/CommentAction'
import LikeAction from './elements/LikeAction'
import ProfileAction from './elements/ProfileAction'
import SaveAction from './elements/SaveAction'
import ShareAction from './elements/ShareAction'
import SongAction from './elements/SongAction'

const VideoSidebar = ({ video, hidden }:
  {
    video: VideoInterface,
    hidden: boolean
  }) => {
  const { downloadVideo, progress } = useDownloadVideo()
  const { getVideoFromCache, cacheVideo } = useCacheVideo()
  const { shareVideo } = useShareData()
  const { numberToHuman } = useNumbersToHuman()
  const [showOverlay, setShowOverlay] = useState(false)

  const handleShare = async () => {
    try {
      setShowOverlay(true)

      let fileToShare = await getVideoFromCache(video.id)

      if (!fileToShare) {
        fileToShare = await downloadVideo(video.url)
        cacheVideo(fileToShare!, video.id)
      }

      await shareVideo(fileToShare!)
      setShowOverlay(false)
    } catch (error) {
      setShowOverlay(false)
    }
  }

  return (
    <div className={(hidden ? 'opacity-0' : 'opacity-100') + ' bottom-10 z-30 pr-2 transition duration-500 easy-out'} >

      <DownloadOverlay progress={progress} show={showOverlay} />

      <ProfileAction url={video.author.avatar} username={video.author.username} />

      <LikeAction count={numberToHuman(video.stats.likes)} />

      <CommentAction count={numberToHuman(video.stats.comments)} videoIdParam={video.id} />

      <SaveAction count={numberToHuman(video.stats.saves)} />

      <ShareAction count={numberToHuman(video.stats.shares)} handleShare={handleShare} />

      <SongAction url={video.song.cover}></SongAction>

    </div>
  )
}

export default VideoSidebar
