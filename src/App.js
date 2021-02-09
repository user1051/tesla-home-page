import React from 'react';
import './App.css';
import Header from './Header'
import Item from './Item'
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
        <Header/> 
        <div className="app__itemConatainer">
          <Item
              title ="Lowest Cost Solar Panels in America"
              desc = "Money-back Guarantee" 
              backgroundImg = {SolarPanels}
              leftBtnText = "Order Now"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
              twoButtons = "true"
              first
          />
           <Item
              title ="Model S"
              desc = "Starting at $69,420" 
              backgroundImg = {ModelS}
              leftBtnText = "Custom Order"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
              twoButtons = "true"
          />
           <Item
              title ="Model 3"
              desc = "Money-back Guarantee" 
              backgroundImg = {Model3}
              leftBtnText = "Custom Order"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
              twoButtons = "true"
          />
          <Item
              title ="Model X"
              desc = "Money-back Guarantee" 
              backgroundImg = {ModelX}
              leftBtnText = "Custom Order"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
              twoButtons = "true"
          />
          <Item
              title ="Model Y"
              desc = "Money-back Guarantee" 
              backgroundImg = {ModelY}
              leftBtnText = "Custom Order"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
              twoButtons = "true"
          />
          <Item
              title ="Solar for new Roofs"
              desc = "Money-back Guarantee" 
              backgroundImg = {SolarRoof}
              leftBtnText = "Order Now"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
              twoButtons = "true"
          />
          <Item
              title ="Accessories"
              desc = "" 
              backgroundImg = {Accessories}
              leftBtnText = "Shop Now"
              leftBtnLink = ""
              rightBtnText = "Learn More"
              rightBtnLink = ""
          />
        </div>
    </div>
  );
}

export default App;
