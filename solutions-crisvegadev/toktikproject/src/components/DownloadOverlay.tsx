const DownloadOverlay = ({ progress, show }:{
  progress: number,
  show: boolean
}) => {
  return (
    show
      ? <div className="fixed top-0 left-0 bg-black bg-opacity-75 w-full h-screen" style={{ zIndex: 100 }}>
        <div className="flex flex-col items-center justify-center h-full" >
          <div className="flex flex-col items-center justify-center" >
            <p className='text-white text-sm mb-4'>Downloading video </p>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <p className="text-white text-sm mt-4" >{progress.toFixed(0)}%</p>
          </div>
        </div>
      </div>
      : <></>
  )
}

export default DownloadOverlay
