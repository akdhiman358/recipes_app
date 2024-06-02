import React from 'react'

import Home from './Home'
import { Route,Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import SearchResults from './SearchResults'
import Recipe from './Recipe'

import { AnimatePresence } from 'framer-motion'

function Pages() {
  const location = useLocation()
  return (
    <div>
       <AnimatePresence mode='wait'>
        <Routes  location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searchResults/:type' element={<SearchResults/>} />
          <Route path='/recipe/:name' element={<Recipe/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages