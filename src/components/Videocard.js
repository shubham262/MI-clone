import React from 'react'
import "../styles/videocard.css"


const Videocard = ({name,image,index}) => {
  return (
    <div className='videocard' style={{backgroundImage:`url(${image})`}}>

    <a href='#/'><img src="https://img.icons8.com/ios-glyphs/30/000000/play-button-circled--v1.png" alt='play btn'/></a>
    <p>{name}</p>


    </div>
  )
}

export default Videocard