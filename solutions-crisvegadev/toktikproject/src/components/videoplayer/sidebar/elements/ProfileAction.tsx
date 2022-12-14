import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

const ProfileAction = ({ url, username }: {
  url: string,
  username?: string
}) => {
  return (
    <div className='rounded-full w-16 relative flex justify-center items-end mb-8' onClick={() => console.log('PP')}>
      <Link to={`/@${username?.toLocaleLowerCase()}`}>
        <img src={url} alt="" className='rounded-full border-2 border-white w-12' />
      </Link>
      <button className='bg-tk-red absolute rounded-xl -bottom-3 w-6 font-bold text-white text-xs flex justify-center items-center h-6'>
        <FaPlus />
      </button>
    </div>
  )
}

export default ProfileAction
