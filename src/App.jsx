import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import OfferCards from './components/OfferCards'
import OfferBanner from './components/OfferBanner'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductShowcase from './components/ProductShowcase'
import OnOurRadar from './components/OnOurRadar'
import LuxurySlider from './components/LuxurySlider'
import GiftCarousel from './components/GiftCarousel'
import LingerieAccessories from './components/LingerieAccessories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <OfferCards/>
    <OfferBanner/>
    <LuxurySlider/>
    <OnOurRadar/>
    <GiftCarousel/>
    <ProductShowcase/>
    <LingerieAccessories/>
    <Footer/>
    </>
  )
}

export default App
