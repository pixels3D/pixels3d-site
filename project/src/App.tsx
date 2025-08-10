import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Health from './pages/Health'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/healthz" element={<Health />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<WorkDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App