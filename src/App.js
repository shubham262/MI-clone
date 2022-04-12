import React, { useState } from "react";
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import Starproducts from "./components/Starproducts.js"
import Hotaccessoriesmenu from "./components/Hotaccessoriesmenu.js"
import Hotaccessoriesmenulist from "./components/Hotaccessoriesmenulist.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptions from "./components/NavOptios.js"

function App() {
  const [notes, setNotes] = useState("");
function navopt(opt){

  setNotes(opt);
}



  return (
  <Router>
  
      <PreNavbar />
      <Navbar  navoptions={navopt}/>
      {/* {notes!=""?console.log(notes):console.log("shubham")} */}
      <NavOptions no={notes}  miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start} navoptions={navopt}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS" />
      <Starproducts starproducts={data.starProduct} />
      <Heading text="HOT ACCESSORIES"/>
      <Hotaccessoriesmenu />
      <Routes>
      <Route exact path="/music" element={<Hotaccessoriesmenulist music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}  />}>
        {/* mnusic route */}
       </Route>

       <Route exact path="/smartdevices" element={<Hotaccessoriesmenulist smartdevices={data.hotAccessories.smartDevice} smartdevicescover={data.hotAccessoriesCover.smartDevice}  />}>
       {/* smartdevices route */}
       </Route>

       <Route exact path="/home" element={<Hotaccessoriesmenulist home={data.hotAccessories.home} homecover={data.hotAccessoriesCover.home}  />}>
       {/* home route */}
       </Route>

       <Route exact path="/lifestyle" element={<Hotaccessoriesmenulist lifestyle={data.hotAccessories.lifeStyle} lifestylecover={data.hotAccessoriesCover.lifeStyle}  />}>
       {/* lifestyle route */}
       </Route>
       <Route exact path="/mobileAccessories" element={<Hotaccessoriesmenulist mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriescover={data.hotAccessoriesCover.mobileAccessories}  />}>
       {/* mobileAccessories route */}
       </Route>

       </Routes> 
       <Heading text="PRODUCTS REVIEWS" />
       <ProductReviews productreviews={data.productReviews} />
       <Heading text="VIDEOS"/>
       <Videos  videos={data.videos}/>
       <Heading text="IN THE PRESS"/>
       <Banner banner={data.banner} />
       <Footer footer={data.footer} />
  </Router>
  );
}

export default App;
