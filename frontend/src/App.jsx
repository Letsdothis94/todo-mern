import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
// import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="lemonade" className='bg-slate-100'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>

    </div>
  )
}

export default App