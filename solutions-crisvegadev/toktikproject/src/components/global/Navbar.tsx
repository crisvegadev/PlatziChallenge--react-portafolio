import { MdLiveTv } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='absolute flex justify-between w-full py-6 px-8 items-center top-0 inset-x-0 z-20 max-w-lg mx-auto' >
      <div className='w-8'>
        <button className=' text-white font-bold'>
          <MdLiveTv className='font-bold text-3xl' />
        </button>
      </div>
      <div className='w-full mx-12 flex justify-center'>
        <button className='text-sm mx-2 py-2 text-white opacity-75'>Popular</button>
        <button className='text-sm mx-2 py-2 text-white opacity-75'>Following</button>
        <button className='text-sm mx-2 py-2 text-white border-b-2 border-white font-bold'>For You</button>
      </div>
      <div>
        <button className='w-8'>
          <FiSearch className='text-white text-2xl' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
