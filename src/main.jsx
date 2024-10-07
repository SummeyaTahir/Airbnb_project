import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './home_page/navbar'
import ControlledCarousel from './home_page/ControlledCarousel'
import Dropdown_items from './home_page/dropdown_items'
import Cards_grid from './Cards_grid'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <Navbar/>
  <ControlledCarousel/>

  <Cards_grid/>
  </StrictMode>,
)
