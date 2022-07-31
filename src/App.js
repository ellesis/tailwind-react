import './App.css'
import { Routes, Route } from 'react-router-dom'

// single page
import Contact from './pages/contact'
import Front from './pages/front'
import About from './pages/about'
import Chart from './pages/chart'
import PageEgg from './pages/page-egg'
import PageLayout from './pages/page-layout'
import PageMain from './pages/page-main'
import PageCollapseMenu from './pages/page-collapse-menu'

// Layout
import RightSlide from './pages/right-slide'
import Better from './pages/better'
import Food from './pages/food'
import Components from './pages/components'
import Yokose from './pages/yokose'
import Green from './pages/green'

// Layout
import AdminLayout from './layouts/AdminLayout'

function App() {
  return (
    <Routes>
      <Route path="/components/*" element={<Components />} />
      <Route path="/echart" element={<Chart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/egg" element={<PageEgg />} />
      <Route path="/food" element={<Food />} />
      <Route path="/main" element={<PageMain />} />

      <Route path="/yokose" element={<Yokose />} />
      <Route path="/collapse-menu" element={<PageCollapseMenu />} />
      <Route path="/green" element={<Green />} />
      <Route path="/right-slide" element={<RightSlide />} />
      <Route path="/better" element={<Better />} />
      <Route path="/layout" element={<PageLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/front" element={<Front />} />

      <Route path="/" element={<Front />} />
    </Routes>
  )
}

export default App
