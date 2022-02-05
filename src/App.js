import './App.css'

import { Routes, Route } from 'react-router-dom'
import PageFront from './pages/page-front'
import PageFood from './pages/page-food'
import PageComponents from './pages/page-components'
import PageEgg from './pages/page-egg'
import PageLayout from './pages/page-layout'

function App() {
  return (
    <Routes>
      <Route path='/layout' element={<PageLayout />} />

      <Route path='/components' element={<PageComponents />} />
      <Route path='/egg' element={<PageEgg />} />
      <Route path='/contact' element={<PageFood />} />

      <Route path='/food' element={<PageFood />} />
      <Route path='/' element={<PageFront />} />
    </Routes>
  )
}

export default App
