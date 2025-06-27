import './App.css'
import { Routes, Route } from 'react-dom/client'
import Layout from './app/Layout'
import MainPage from './pages/MainPage/MainPage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
