import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import PageFront from './pages/page-front'
import PageFood from './pages/page-food'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/food" element={<PageFood />} />
        <Route path="/" element={<PageFront />} />
      </Routes>
    </Layout>
  )
}

export default App
