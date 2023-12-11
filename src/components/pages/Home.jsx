import Navbar2 from "../navBar2";
import SectionSix from "../sectionSix";
import SectionFour from "../sectionFour";
import Services from "../services";
import BannerPart from "../bannerpart";
import LoginPage from "./loginPage";
import Button from "../button";

import { flag } from "../constants/array";
import TextInput from "../textInput";
import { Link } from 'react-router-dom';
import { deals } from "../constants/array";
import { cart } from "../constants/array";
import * as images from '../images';
import { sidebarList } from "../constants/array";
import { timer } from "../constants/array";

const Main = () => {

  return (
    <div className="mainSection">
      <Navbar2 />
      <ul className="bannerContainer">
        <div className="sidebar">
          <ul>
            {sidebarList.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>

        <div className="mask">
          <div className="bimg">
            <img src={images?.banner} alt="images" /></div>
          <div className="maskinner">
            <p>Latest Trending </p>
            <h1>Electronic Items</h1>
            <Button className="learnbutton" value="Learn more"/>
          </div>
        </div>
        <div className="bannerContact">
          <LoginPage />
          <BannerPart className="banner1" value="Get US $10 off with a new supplier"/>
          <BannerPart className="banner2" value="Send quotes with supplier preferences"/>
        </div>
      </ul>
      <ul className="sectionSale">
        <div className="count">
          <div className="countdown">
            <h2>Deals and Offers</h2>
            <p>Hygiene equipments</p>
          </div>
          <div className="countdowns">

            {timer?.map((item) => (
              <ul className="timer">
                <li key={item.id}>{item.day}</li>
                <li >{item.time}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="items">
          <ul>
            {deals.map((item) => (
              <li className='deals-items' key={item.id} >
                <div className='imgcontainer'>
                  <Link to="/mobdetails">
                    <img src={item?.image} alt="items" />
                  </Link>
                </div>
                <p>{item.text}</p>
                <Button value={item.btext}/>
              </li>
            ))}
          </ul>
        </div>
      </ul>
      <div className="sectionthre">
        <div className="threeRight">
          <div className="img-container">
            <img src={images?.bg} alt="background" />
          </div>
          <h4>Home and Outdoor</h4>
          <Button className="sourcebutton" value="Source now"/>
        </div>
        <div className="sectionThree">
          <ul className="grid-container">
            {cart?.map((item) => (
              <li key={item.id} className='grid-items'>
                <h4>{item?.text}</h4>
                <p>{item?.price}</p>
                <img src={item?.image} alt="items" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SectionFour />
      <div className="sectionfive">
        <img src={images?.rect} alt="images" />
        <div className="five">
          <h2>An easy way to send request to all Suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt.</p>
        </div>
        <ul className="formm">
          <div className="forms">
            <form className="form1">
              <h3>Send quotes to suppliers</h3>
              <TextInput type="text" placeholder="What item do yo need?" className="text" />
              <textarea placeholder="Type more details"></textarea>
              <div className="flex">
                <TextInput type="text" placeholder="Quantity" className="quantity" />
                <label htmlFor="pcs">Pcs
                  <select name="pcs"></select>
                </label>
              </div>
              <Button className="send" value="Send enquiry"/>
            </form>
          </div>
        </ul>
      </div>
      <SectionSix />
      <Services />
      <div className="flag">
        <h2>Suppliers by region</h2>
        <div className="flags">
          <ul className="container">
            {flag?.map((item) => (
              <li key={item.id}> 
                <div className='img-container'>
                  <img src={item?.image} alt="flag" />
                </div>
                <div className='flex'>
                  <h4>{item?.text}</h4>
                  <p>{item?.domain}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="seven">
        <h3>Subscribe on our newsletter</h3>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="inputsection">
          <TextInput
            type="text"
            placeholder="Email"
            className="input"
          />
          <Button className="subscribe" value="Subscribe"/>
        </div>
      
      </div>
    </div>
  )
}
export default Main;