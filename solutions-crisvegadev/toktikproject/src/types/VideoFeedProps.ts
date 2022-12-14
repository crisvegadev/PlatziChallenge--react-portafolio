import VideoInterface from './VideoInterface'

type VideoFeedProps = {
    data: VideoInterface[],
    links: {},
    meta: {
      current_page: number,
      last_page: number,
      per_page: number,
      total: number
    }
  }

export default VideoFeedProps
