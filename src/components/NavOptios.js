import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"




const NavOptios = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories,no}) => {
console.log(no);
   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

   useEffect(() => {
     
    if(no==="miphones"){
      
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        setLaptopToggle(false)
        setFitnessToggle(false)
        setHomeToggle(false)
        setAudioToggle(false)
        setAccessoriesToggle(false)
        return   setMiPhoneToggle(true)

    }
    else if(no==="redmiphones"){
        setMiPhoneToggle(false)
        
        setTvToggle(false)
        setLaptopToggle(false)
        setFitnessToggle(false)
        setHomeToggle(false)
        setAudioToggle(false)
        setAccessoriesToggle(false)
        return   setRedmiPhoneToggle(true)
    }else if(no==="tv"){
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
       
        setLaptopToggle(false)
        setFitnessToggle(false)
        setHomeToggle(false)
        setAudioToggle(false)
        setAccessoriesToggle(false)
        return   setTvToggle(true)
    }else if(no==="laptops"){
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        
        setFitnessToggle(false)
        setHomeToggle(false)
        setAudioToggle(false)
        setAccessoriesToggle(false)
        return   setLaptopToggle(true)
    }else if(no==="lifestyle"){
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        setLaptopToggle(false)
      
        setHomeToggle(false)
        setAudioToggle(false)
        setAccessoriesToggle(false)
        return   setFitnessToggle(true)
    }else if(no==="home"){
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        setLaptopToggle(false)
        setFitnessToggle(false)
       
        setAudioToggle(false)
        setAccessoriesToggle(false)
        return   setHomeToggle(true)
    }else if(no==="audio"){
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        setLaptopToggle(false)
        setFitnessToggle(false)
        setHomeToggle(false)
       
        setAccessoriesToggle(false)
        return   setAudioToggle(true)
    }else if(no==="accessoreies"){
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        setLaptopToggle(false)
        setFitnessToggle(false)
        setHomeToggle(false)
        setAudioToggle(false)
       
        return   setAccessoriesToggle(true)
    }
    else{
        setMiPhoneToggle(false)
        setRedmiPhoneToggle(false)
        setTvToggle(false)
        setLaptopToggle(false)
        setFitnessToggle(false)
        setHomeToggle(false)
        setAudioToggle(false)
        setAccessoriesToggle(false)
    }

       
   },[no])
 

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOptios

