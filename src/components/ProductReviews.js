import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/productreviews.css"


const ProductReviews = ({productreviews}) => {
  return (
    <div className='productreviews'>
        {
            productreviews.map((item,index)=>(

                <ProductReviewCard price={item.price} key={item.image} image={item.image} name={item.name} review={item.review} index={index}  />
            ))
        
        
        }


    </div>
  )
}

export default ProductReviews