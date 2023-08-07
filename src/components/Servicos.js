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
        <Container>
          <p>Serviços</p>
          
        </Container>
    )

}

const Container = styled.div `
display: flex;
margin-top: 25px;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 900px;
margin-top: 60px;
background-color: lightsalmon;
p{
    font-size: 60px;
    color: white;
}
`
