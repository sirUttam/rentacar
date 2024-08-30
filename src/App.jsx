import './App.css'
import Toolbar from './components/navigations/Toolbar'
import Footer from './components/navigations/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/page/Home'
import About from './components/page/About'
import Brands from './components/page/Brands'
import Cars from './components/page/Cars'
import Services from './components/page/Services'
import Contact from './components/page/Contact'
import Layout from './HOC/Layout'

function App() {

  return (
    <>
  
  <Routes>
    <Route element={<Layout />}>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/brands' element={<Brands/>}/>
    <Route path='/cars' element={<Cars/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>


  </Routes>
    </>
  )
}

export default App
