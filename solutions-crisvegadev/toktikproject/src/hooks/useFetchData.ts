
import { useEffect, useState } from 'react'
import VideoFeedProps from '../types/VideoFeedProps'
import VideoInterface from '../types/VideoInterface'

const useFetchData = (page: number) => {
  const [response, setResponse] = useState<VideoFeedProps>()
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const [list, setList] = useState<VideoInterface[]>([])

  useEffect(() => {
    fetch('https://apitk.crisvega.dev/api/videos?page=' + page)
      .then(res => res.json())
      .then(response => {
        if (list.length === 0) {
          setList(response.data)
        } else {
          setList(list => [...list, ...response.data])
        }

        setResponse(response)
        setError(false)
        setLoading(false)
        if (response.meta.current_page === response.meta.last_page) {
          setHasMore(false)
        }
      })
      .catch(error => {
        setError(true)
        setResponse(error)
        setLoading(false)
      })
  }, [page])

  return { response, error, loading, hasMore, list }
}

export default useFetchData
