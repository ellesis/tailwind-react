import './App.css'

import {Routes, Route} from 'react-router-dom'
import Food from './pages/food'
import PageComponents from './pages/page-components'
import PageEgg from './pages/page-egg'
import PageLayout from './pages/page-layout'
import PageMain from './pages/page-main'

import Yokose from './pages/yokose'
import Green from './pages/green'

import Contact from './pages/contact'
import Front from './pages/front'
import About from './pages/about'

function App() {
  return (
    <Routes>
      <Route path="/layout" element={<PageLayout />} />

      <Route path="/components" element={<PageComponents />} />
      <Route path="/egg" element={<PageEgg />} />
      <Route path="/food" element={<Food />} />

      <Route path="/main" element={<PageMain />} />

      <Route path="/yokose" element={<Yokose />} />
      <Route path="/green" element={<Green />} />

      {/* Layout */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Front />} />
    </Routes>
  )
}

export default App
