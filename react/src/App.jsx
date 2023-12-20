

import './App.css'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './component/body/Home/Home'
import About from './component/body/About/About'
import Product from './component/body/Product/Product'
import Contact from './component/body/Contact/Contact'
import Footer from './component/Footer/Footer'


function App() {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
       <Route path='/' Component={Home}/>
       <Route path='/about' Component={About}/>
       <Route path='/product' Component={Product}/>
       <Route path='/contact' Component={Contact}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
     
    </>
  )
}

export default App
