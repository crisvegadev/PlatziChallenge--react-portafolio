
import { useEffect, useState } from 'react'
import VideoFeedProps from '../types/VideoFeedProps'
import VideoInterface from '../types/VideoInterface'

const useGetSingleVideo = (id: string) => {
  const [response, setResponse] = useState<VideoFeedProps>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const [video, setVideeo] = useState<VideoInterface>()

  useEffect(() => {
    fetch('https://apitk.crisvega.dev/api/videos/' + id)
      .then(res => res.json())
      .then(response => {
        console.log('response', response)
        setVideeo(response.data)
        setResponse(response)
        setError(false)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setResponse(error)
        setLoading(false)
      })
  }, [id])

  return { response, error, loading, video }
}

export default useGetSingleVideo
