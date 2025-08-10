import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BackgroundFX from './components/effects/BackgroundFX'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Services from './pages/Services'
import About from './pages/About'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Showroom from './pages/Showroom'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/healthz" element={<Health />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<WorkDetail />} />
        <Route path="showroom" element={<Showroom />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App