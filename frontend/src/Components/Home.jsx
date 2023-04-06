import React, { useEffect } from 'react'
import SideBar from './BasicLayouts/SideBar'
import NavBar from './BasicLayouts/NavBar'
import HomeContent from './Home/HomeContent'

const Home = () => {
  
  return (
    <div>
      <div className="flex bg-white">
          <SideBar />
          <NavBar />
      </div>

    </div>
  )
}

export default Home