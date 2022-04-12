import React from 'react'
import "../styles/nav.css"
import data from "../data/data.json"
import {Link} from "react-router-dom"



const searchicon=<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>



function Navbar(props) {

  function handleMouseEnter(e){
   props.navoptions(e.target.name)
  
    
  }
  // function handleMouseleave(){
  //   props.navoptions("")
   
     
  //  }

  return (
    <div className='nav'  >

      <div className='logo'>
        <a href="/">
            <img id="logoimage" src={data.logo} alt="Not" />
        </a>
        </div>
        <Link className='navlinks' to="/miphones" name="miphones" onMouseEnter={handleMouseEnter}  >MI Phones</Link>
        <Link className='navlinks' to="/redmiphones" name="redmiphones" onMouseEnter={handleMouseEnter} >Redmi Phones</Link>
        <Link className='navlinks' to="/tv" name="tv" onMouseEnter={handleMouseEnter}>TV</Link>
        <Link className='navlinks' to="/laptops" name="laptops" onMouseEnter={handleMouseEnter}>Laptops</Link>
        <Link className='navlinks' to="/lifestyle" name="lifestyle" onMouseEnter={handleMouseEnter}>Fitness & Lifestyles</Link>
        <Link className='navlinks' to="/home" name="home" onMouseEnter={handleMouseEnter}>Home</Link>
        <Link className='navlinks' to="/audio" name="audio" onMouseEnter={handleMouseEnter}>Audio</Link>
        <Link className='navlinks' to="/accessoreies" name="accessoreies" onMouseEnter={handleMouseEnter}>Accessories</Link>

        <div className='searchBox'>
          <input type="text" autoComplete='off' name='search' placeholder='Search Products' />
          {searchicon}
        </div>

     

    </div>
  )
}

export default Navbar