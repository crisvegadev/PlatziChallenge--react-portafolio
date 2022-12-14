import { useState } from 'react'

const useDownloadVideo = () => {
  const [progress, setProgress] = useState(0)

  const downloadVideo = async (url: string) => {
    try {
      const response: Response = await fetch(url)
      const reader = response.body?.getReader()
      const contentLength: string = response.headers.get('Content-Length') || '0'

      let receivedLength = 0

      const chunks = []

      while (true) {
        const { done, value } = await reader!.read()

        if (done) break

        chunks.push(value)
        receivedLength += value.length

        setProgress((receivedLength / parseInt(contentLength)) * 100)
      }

      const blob = new Blob(chunks)
      const file = new File([blob], 'video.mp4', { type: 'video/mp4', lastModified: Date.now() })

      return file
    } catch {
      console.log('error')
    }
  }

  return { downloadVideo, progress }
}

export default useDownloadVideo
