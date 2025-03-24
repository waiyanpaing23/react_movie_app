import React from 'react'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Route, Routes } from 'react-router'
import Detail from './components/Detail'
import Layout from './components/Layout'

const App = () => {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<Detail />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App