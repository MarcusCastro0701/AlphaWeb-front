import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import ServicesSlide from "./ServicesSlide";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Servicos(){
    const services = [
      {  name:"Marketing",
        description:"aaaAAAAaaaAAA"},
      {  name:"Programação",
        description:"BBBBBBBBBBBBBBBBB"}]
    
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
        arrows: true
      };

    return(
        <SubContainer>
       <p>Serviços</p>
       <Carousel {...settings}>
              {services.map((item) => (<ServicesSlide name={item.name} description={item.description}/>))}
            </Carousel>
        </SubContainer>
    )

}

const SubContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 600px;
margin-top: 60px;
border-radius: 15px;
p{
    font-size: 60px;
    color: white;
}
`
const Carousel = styled(Slider)`
height: 500px;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
color: white;
@media (max-width: 1200px) {
    width: 270px;
    height: 205px;
  }
img{
    width:400px;
    height: 350px;
    border-radius: 5%;
    @media (max-width: 1200px) {
    width: 240px;
    height: 150px;
    margin-top: 10px;
  }
}
.slick-dots li button:before {
  color: white; 
}

`