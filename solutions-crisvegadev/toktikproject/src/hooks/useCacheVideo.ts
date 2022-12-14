const useCacheVideo = () => {
  const cacheVideo = async (file: File, name: string) => {
    try {
      const cache = await caches.open('videos')

      if (cache) await cache.put(name, new Response(file))
    } catch {
      console.log('error')
    }
  }

  const getVideoFromCache = async (name: string) => {
    try {
      const cache = await caches.open('videos')
      if (cache) {
        const response = await cache.match(name)

        if (response) {
          const file = await response.blob()

          const fileToShare = new File([file], 'video.mp4', { type: 'video/mp4', lastModified: Date.now() })

          return fileToShare
        }
      }
    } catch {
      console.log('error')
    }
  }

  return { cacheVideo, getVideoFromCache }
}

export default useCacheVideo
