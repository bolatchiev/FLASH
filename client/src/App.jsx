import './App.css'
import { Routes, Route } from 'react-router'
import Layout from './app/Layout'
import MainPage from './pages/MainPage/MainPage'
import GamePage from './pages/GamePage/GamePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<MainPage />} />
        <Route path='/game/:topic' element={<GamePage/>}/>
      </Route>
    </Routes>
  )
}

export default App
