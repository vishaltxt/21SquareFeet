import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog'
import Read from '../pages/Read'
import Read1 from '../pages/Read1'
// import Contact from '../pages/Contact'

function Router() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Blog/>}/> */}
        <Route path='/blog' element={<Blog />} />
        <Route path='/read' element={<Read />} />
        <Route path='/read1' element={<Read1 />} />
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
    </>
  )
}

export default Router