
const SongAction = ({ url }: {
  url: string
}) => {
  return (
    <div className='rounded-full w-16 flex justify-center items-end my-4' onClick={() => console.log('SONG')}>
      <div className=" bg-black p-2 rounded-full">
        <img src={url} alt="" className='rounded-full w-5 animate-spin-6s ' />
      </div>
    </div>
  )
}

export default SongAction
