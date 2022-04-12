import React from 'react'
import Hotitemcard from "./Hotitemcard.js"
import "../styles/Hotaccessoriesmenulist.css"

const Hotaccessoriesmenulist = ({music,musiccover,smartdevices,smartdevicescover,home,homecover,lifestyle,lifestylecover,mobileAccessories,mobileAccessoriescover}) => {
  return (
    <div className='hotaccessoriesmenulist'>

    <div>
        <img src={musiccover||smartdevicescover||homecover||lifestylecover||mobileAccessoriescover} alt="cover" />
    </div>
    {/*-------2nd part */}
    <div>
        {
            music && music.map((item,index)=>(
                <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))

        }

    
        {
            smartdevices && smartdevices.map((item,index)=>(
                <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))

        }

    
        {
            home && home.map((item,index)=>(
                <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))

        }

    
        {
            lifestyle && lifestyle.map((item,index)=>(
                <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))

        }

    
        {
            mobileAccessories && mobileAccessories.map((item,index)=>(
                <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))

        }
        <Hotitemcard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"></Hotitemcard>

    </div>

    </div>
  )
}

export default Hotaccessoriesmenulist