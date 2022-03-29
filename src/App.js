import './App.css'
import {Routes, Route} from 'react-router-dom'

import Food from './pages/food'
import Components from './pages/components'
import PageEgg from './pages/page-egg'
import PageLayout from './pages/page-layout'
import PageMain from './pages/page-main'

import Yokose from './pages/yokose'
import Green from './pages/green'

import Contact from './pages/contact'
import Front from './pages/front'
import About from './pages/about'
import RightSlide from './pages/right-slide'
import Better from './pages/better'

// Layout
import LayoutAdmin from './layouts/LayoutAdmin'

function App() {
  return (
    <Routes>
      <Route path="/layout" element={<PageLayout />} />
      <Route path="/admin/*" element={<LayoutAdmin />} />

      <Route path="/components" element={<Components />} />
      <Route path="/egg" element={<PageEgg />} />
      <Route path="/food" element={<Food />} />

      <Route path="/main" element={<PageMain />} />

      <Route path="/yokose" element={<Yokose />} />
      <Route path="/green" element={<Green />} />
      <Route path="/right-slide" element={<RightSlide />} />
      <Route path="/better" element={<Better />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Front />} />
    </Routes>
  )
}

export default App
