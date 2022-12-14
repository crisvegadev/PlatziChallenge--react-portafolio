import DataStat from '../components/profile/DataStat'
import Navbar from '../components/profile/Navbar'
import { GrFavorite } from 'react-icons/gr'
import { TfiLayoutGrid3Alt } from 'react-icons/tfi'
import { Link, Outlet, useParams } from 'react-router-dom'
import useFetchProfile from '../hooks/useFetchProfile'
import useFetchDataByAuthor from '../hooks/useFetchDataByAuthor'
import { TiArrowSortedDown } from 'react-icons/ti'

const ProfilePage = () => {
  const { likes, username } = useParams()
  const { loading, author } = useFetchProfile(username!)
  const { list } = useFetchDataByAuthor(username!, 1)

  return (
    loading
      ? <div className='text-black'>Loading...</div>
      : <div className='bg-white max-w-md mx-auto h-screen'>
        <Navbar name={author!.name} />

      <div className="text-center flex justify-center flex-col items-center pt-14">
        <img src={author?.avatar} alt="" className="rounded-full w-24 bg-gray-200 h-24 overflow-hidden" />
        <span className="mt-2">@{author?.username}</span>
      </div>

      <div className="mt-3 max-w-xs mx-auto px-5">
        <div className="flex justify-around w-full">
          <DataStat data={'0'} label="Following" />
          <DataStat data={'0'} label="Followers" />
          <DataStat data={'0'} label="Likes" />
        </div>
        <div className="w-full px-10 mt-3 flex items-center justify-center">
          <button className="bg-red-500 text-white py-2 px-12 text-sm rounded">Follow</button>
          <button className="ml-1 p-2 border rounded">
            <TiArrowSortedDown />
          </button>
        </div>
        <div className="flex justify-around w-full text-center mt-2 mb-4">
          <p className="text-xs whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: author?.biography || '' }} />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Link className='w-full' to=''>
          <div className={(likes ? 'border-white ' : 'border-black') + ' border-b-2 text-center w-8 mx-auto pb-2'}>
            <TfiLayoutGrid3Alt className='mx-auto text-slate-700' />
          </div>
        </Link>
        <Link to='likes' className='py-2 px-4 w-full text-center'>
          <div className={(likes ? 'border-black ' : 'border-white') + ' border-b-2 text-center w-8 mx-auto pb-2'}>
            <GrFavorite className='mx-auto text-slate-700' />
          </div>
        </Link>
      </div>
      <div className="">
        <Outlet context={list} />
      </div>
    </div>
  )
}

export default ProfilePage
