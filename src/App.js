import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import PageFront from './pages/page-front'
import PageFood from './pages/page-food'
import PageComponents from './pages/page-components'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/components' element={<PageComponents />} />
        <Route path='/food' element={<PageFood />} />
        <Route path='/about' element={<PageFood />} />
        <Route path='/contact' element={<PageFood />} />
        <Route path='/' element={<PageFront />} />
      </Routes>
    </Layout>
  )
}

export default App
