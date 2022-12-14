import { ReactNode } from 'react'

const UserAction = (props: {
  dataNumber: string,
  children: ReactNode,
}) => {
  return (
    <div className='mt-4 text-white text-center flex justify-center flex-col items-center'>
      {props.children}
      <span className='mt-1 text-sm'>{props.dataNumber}</span>
    </div>
  )
}

export default UserAction
