import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoList from './components/profile/VideoList'
import VideoListLikes from './components/profile/VideoListLikes'
import CommentContext from './hooks/CommentContext'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SingleVideo from './pages/SingleVideo'
import TagPage from './pages/TagPage'

function App () {
  const [show, setShow] = useState(false)
  const [videoId, setVideoId] = useState('')
  const value = { show, setShow, videoId, setVideoId }

  return (

    <CommentContext.Provider value={value} >

    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="tags/:tag" element={<TagPage />} />

      <Route path="/@:username" element={<ProfilePage />} >
        <Route path='' element={<VideoList />} />
      </Route>
      <Route path="/@:username" element={<ProfilePage />} >
        <Route path=':likes' element={<VideoListLikes page={4} />} />
      </Route>

      <Route path="/@:username/video/:videoId" element={ <SingleVideo />} />

    </Routes>
  </BrowserRouter>
  </CommentContext.Provider>
  )
}

export default App
