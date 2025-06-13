import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


{/* <NavLink to='/'>Home</NavLink>
              <div className="relative group">
                <li className="flex items-center gap-1">Properties <RiArrowDropDownLine /></li>
                <div className="absolute hidden group-hover:block border rounded-md shadow-lg w-52 bg-white text-gray-500 left-[-20px] mt-2 p-2">
                  <li className="p-[4px] hover:text-orange-800 text-base">All Properties</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Featured Properties</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Most Viewed Properties</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Nearby Cities Properties</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Most Favorite Properties</li>
                </div>
              </div>
              <div className="relative group">
                <li className="flex items-center gap-1">Pages <RiArrowDropDownLine /></li>
                <div className="absolute hidden group-hover:block border rounded-md shadow-lg w-44 bg-white text-gray-500 left-[-20px] mt-2 p-2">
                  <li className="p-[4px] hover:text-orange-800 text-base">Subscription Plan</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Trends</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Area Converter</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Terms & Conditions</li>
                  <li className="p-[4px] hover:text-orange-800 text-base">Privacy Policy</li>
                </div>
              </div>
              <NavLink to='contact-us'>Contact Us</NavLink>
              <NavLink to='about-us'>About Us</NavLink>  */}