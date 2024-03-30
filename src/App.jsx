import './App.css'
import {Routes, Route} from 'react-router-dom'

import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Home from './views/Home'
import Admin from './views/Admin'
import Customer from './views/Customer'
import Contact from './views/Contact'
import Error from './views/Error'
import SoboFood from './Pages/SoboFood/SoboFood'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/admin' element={<Admin />}>Admin</Route>
        <Route path='/customer' element={<Customer />}>Customer</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='/soboFood' element={<SoboFood />}>Sobo Food</Route>
        <Route path='*' element={<Error />}>Error</Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
