import React from 'react'
import  Carousel from 'react-bootstrap/Carousel'



const Slider = (props) => {
  function handleMouseleave(){
    props.navoptions("")
   
     
   }


  return (
    <Carousel fade onMouseEnter={handleMouseleave}>
        {
            props.start.map((item,index)=>(
                <Carousel.Item  key={item} interval={1500}>
                  <img className="d-block w-100"
                    src={item}
                    alt={`${index} slide`}
                />

                </Carousel.Item>
            ))

        }
    </Carousel>
  )
}

export default Slider