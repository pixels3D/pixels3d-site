import React from 'react'
import { Outlet } from 'react-router-dom'
import BackgroundFX from '../effects/BackgroundFX'
import HoverBloom from '../fx/HoverBloom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundFX />
      <HoverBloom />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}