
import { useEffect, useState } from 'react'
import Comment from '../types/Comment'

const useFetchComments = (videoId: string) => {
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const [list, setList] = useState<Comment[]>([])

  useEffect(() => {
    setLoading(true)
    if (videoId === '' || videoId === undefined) return
    fetch('https://apitk.crisvega.dev/api/comments/' + videoId)
      .then(res => res.json())
      .then(response => {
        setList(response.data)
        setError(false)
        setLoading(false)
        if (response.meta.current_page === response.meta.last_page) {
          setHasMore(false)
        }
      })
      .catch(_ => {
        setError(true)
        setLoading(false)
      })
  }, [videoId])

  return { error, loading, hasMore, list }
}

export default useFetchComments
