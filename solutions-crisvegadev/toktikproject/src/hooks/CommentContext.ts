import React from 'react'

const CommentContext = React.createContext({
  show: false,
  setShow: (_show: boolean) => { },
  videoId: '',
  setVideoId: (_videoId: string) => { }
})

export default CommentContext
