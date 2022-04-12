import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Hotaccessories.css"

const Hotaccessoriesmenu = () => {
  return (
    <div className='hotaccessoriesmenu'>
     <Link className='Hotaccessorieslink' to="/music">Music Store </Link>
    <Link className='Hotaccessorieslink' to="/smartdevices">Smart Devices </Link>
    <Link className='Hotaccessorieslink' to="/home">Home </Link>
    <Link className='Hotaccessorieslink' to="/lifestyle">Lifestyle </Link>
    <Link className='Hotaccessorieslink' to="/mobileAccessories">Mobile Accessories </Link>
  

   </div>
  )
}

export default Hotaccessoriesmenu