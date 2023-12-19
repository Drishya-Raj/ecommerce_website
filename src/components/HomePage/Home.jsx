import React, { useEffect } from "react";
import BannerPart from './bannerpart';
import LoginPage from "../pages/loginPage";
import Button from "../button";
import { flag, itemImages } from "../constants/array";
import TextInput from "../textInput";
import { Link } from 'react-router-dom';
import { deals } from "../constants/array";
import { cart } from "../constants/array";
import * as images from '../images';
import { sidebarList } from "../constants/array";
import { timer } from "../constants/array";
import Navbar from "../navbar";
import NavItem from "../navItems";
import Offers from './Offers'
import Service from "./service";
import { service } from "../constants/array";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess } from "../../Redux/action";


const Main = () => {

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataSuccess(data));
  },[dispatch])
  

  return (
    <div className="mainSection">
      <Navbar search={true} />
      <NavItem />
      <ul className="bannerContainer">
        <div className="sidebar">
          <ul>
            {sidebarList?.map((item) => {
              const { id, text } = item;
              return (<li key={id}>{text}</li>)
            })}
          </ul>
        </div>
        <div className="mask">
          <div className="bimg">
            <img src={images?.banner} alt="images" /></div>
          <div className="maskinner">
            <p>Latest Trending </p>
            <h1>Electronic Items</h1>
            <Button className="learnbutton" value="Learn more" />
          </div>
        </div>
        <div className="bannerContact">
          <LoginPage />
          <BannerPart className="banner1" value="Get US $10 off with a new supplier" />
          <BannerPart className="banner2" value="Send quotes with supplier preferences" />
        </div>
      </ul>
      <ul className="sectionSale">
        <div className="count">
          <div className="countdown">
            <h2>Deals and Offers</h2>
            <p>Hygiene equipments</p>
          </div>
          <div className="countdowns">
            {timer?.map((item) => {
              const { id, day, time } = item;
              return (
                <ul className="timer">
                  <li key={id}>{day}</li>
                  <li >{time}</li>
                </ul>
              )
            })}
          </div>
        </div>
        <div className="items">
          <ul>
            {deals?.map((item) => {
              const { id, image, text, btext } = item;
              return (
                <li className='deals-items' key={id} >
                  <div className='imgcontainer'>
                    <Link to="/mobdetails"><img src={image} alt="items" /></Link>
                  </div>
                  <p>{text}</p>
                  <Button value={btext} />
                </li>
              )})}
          </ul>
        </div>
      </ul>
      <Offers bannerImage={images?.bg} title={"Home and Outdoors"} data={cart} />
      <Offers bannerImage={images?.bg1} title={"Consumer electronics and gadgets"} data={itemImages} />
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
              <Button className="send" value="Send enquiry" />
            </form>
          </div>
        </ul>
      </div>
      <div className="sectionSix">
        <h3>Recommended items</h3>
        <ul>
          {data?.map((item) => {
            const { id, image, price, title } = item;
            return (<Link key={id} to='/productDetails'>
              <li className="cartItems">
                <div className='imgcontainer'>
                  <img src={image} alt="images" />
                </div>
                <h4>{price}</h4>
                <p>{title}</p>
              </li>
            </Link>)
          })}
        </ul>
      </div>
      <div className='services'>
        <h2>Our extra services</h2>
        <div className="subsection">
          <ul className="container">
            {service?.map((item) => {
              const { image1, id, text, image2 } = item;
              return (
                <Service image1={image1} text={text} id={id} image2={image2} />
              )
            })}
          </ul>
        </div>
      </div>
      <div className="flag">
        <h2>Suppliers by region</h2>
        <div className="flags">
          <ul className="container">
            {flag?.map((item) => {
              const { id, image, text, domain } = item;
              return (
                <li key={id}>
                  <div className='img-container'>
                    <img src={image} alt="flag" />
                  </div>
                  <div className='flex'>
                    <h4>{text}</h4>
                    <p>{domain}</p>
                  </div>
                </li>
              )
            })}
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
          <Button className="subscribe" value="Subscribe" />
        </div>
      </div>
    </div >
  )
}
export default Main;