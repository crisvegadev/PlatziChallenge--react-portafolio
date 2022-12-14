
import { useEffect, useState } from 'react'
import Author from '../types/Author'
import ProfileResponse from '../types/ProfileResponse'

const useFetchProfile = (username: string) => {
  const [response, setResponse] = useState<ProfileResponse>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const [author, setAuthor] = useState<Author>()

  useEffect(() => {
    fetch('https://apitk.crisvega.dev/api/authors/' + username)
      .then(res => res.json())
      .then(response => {
        setAuthor(response.data)
        setResponse(response)
        if (response.status !== 'ok') {
          setError(true)
        }
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setResponse(error)
        setLoading(false)
      })
  }, [username])

  return { response, error, loading, author }
}

export default useFetchProfile
