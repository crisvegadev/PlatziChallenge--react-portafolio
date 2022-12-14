import { useState } from 'react'
import UserAction from './UserAction'

const SaveAction = ({ count }: {
  count: string
}) => {
  const [saved, setSaved] = useState(false)

  const save = () => setSaved(!saved)

  return (
    <div onClick={save}>
      <UserAction dataNumber={count}>
        <svg fill={saved ? 'orange' : 'white'} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='transition'>
          <path d="M19 24l-7-6-7 6v-24h14v24z" /></svg>
      </UserAction>
    </div>
  )
}

export default SaveAction
