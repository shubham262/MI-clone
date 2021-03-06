import React from 'react'
import Carousel  from 'react-bootstrap/Carousel'


const Banner = ({banner}) => {
  return (
    <div>
    <Carousel fade>

    {
        banner.end.map((item,index)=>(

            <Carousel.Item  key={item.image} interval={100} id="banner" keyboard={true}>
            <img className="d-block w-100"
                    id="bannerImage"
                    src={item.image}
                    alt={`${index} banner`}
                />
            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read More</u>
            </Carousel.Caption>

            </Carousel.Item>
            

        ))




    }



    </Carousel>


    </div>
  )
}

export default Banner