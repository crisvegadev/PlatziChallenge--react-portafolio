const useShareData = () => {
  const shareVideo = async (file: File) => {
    try {
      const shareData = {
        files: [file],
        title: 'Share video'
      }

      await navigator.share(shareData)
    } catch {
      console.log('Error sharing video')
    }
  }

  return { shareVideo }
}

export default useShareData
