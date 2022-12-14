import { BiMessageMinus } from 'react-icons/bi'
import { RxPerson } from 'react-icons/rx'
import { HiPlus } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'

const BottomNavbar = () => {
  return (
    <div className='absolute h-16 flex justify-around items-center w-full py-5 bg-black bottom-0 inset-x-0 z-50 outline-none max-w-lg mx-auto'>
      <div className="flex-col flex justify-center items-center outline-none">
        <AiFillHome className='text-white text-3xl' fill='white' />
        <span className='text-white text-xs'>Home</span>
      </div>
      <div className="flex-col flex justify-center items-center">
        <img src="https://static.platzi.com/media/avatars/avatars/mrassisen_3cb57865-59f5-4b15-a09a-b3e85c66de0f.jpg" alt="" className="rounded-full w-8" />
        <span className='text-white text-xs'>Now</span>
      </div>
      <div className='bg-white text-black text-center rounded-md border-x-4 border-r-tk-red border-l-tk-aqua font-bold px-2 h-6 flex items-center justify-center mb-3'>
        <HiPlus />
      </div>
      <div className="flex-col flex justify-center items-center">
        <BiMessageMinus className='text-white text-3xl'/>
        <small className='text-white text-xs'>Inbox</small>
      </div>
      <div className="flex-col flex justify-center items-center">
        <RxPerson className='text-white text-3xl' />
        <span className='text-white text-xs'>Profile</span>
      </div>
    </div>
  )
}

export default BottomNavbar
