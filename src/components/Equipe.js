import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import alvaro from "../assets/images/alvaro.png";
import marcus from "../assets/images/marcus.png";
import bruno from "../assets/images/bruno.jpg";
import pablo from "../assets/images/pablo.png";
import pedrol from "../assets/images/pedrol.jpeg";
import pedroa from "../assets/images/pedroa.png";
import TeamMember from "./CarouselComponent";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scroll from "../hooks/Scroll";

export default function Equipe(){

  const members = [
    {
      name: 'Álvaro Caires',
      role: 'Marketing',
      imgSrc: alvaro
    },
    {
      name: 'Pablo Siervuli',
      role: 'Marketing',
      imgSrc: pablo
    },
    {
      name: 'Bruno Claudiano',
      role: 'Marketing & Vendas',
      imgSrc: bruno,
    },
    {
      name: 'Marcus Castro',
      role: 'Desenvolvedor',
      imgSrc: marcus,
    },
    {
      name: 'Pedro Leôncio',
      role: 'Desenvolvedor',
      imgSrc: pedrol,
    },
    {
      name: 'Pedro Ribeiro',
      role: 'Desenvolvedor',
      imgSrc: pedroa,
    },
    
  ]

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  };
        return (
          <>
            <Container>
              <p>Nossa equipe</p>
              <Carousel {...settings}>
                {members.map((item) => (<TeamMember imgSrc={item.imgSrc} name={item.name} role={item.role}/>))}
              </Carousel>
            </Container>
            <Click onClick={() => scroll(2000)}>
              CONHEÇA NOSSOS SERVIÇOS
            </Click>
          </>
        );
}

const Click = styled.div`
width: 300px;
height: 50px;
color: white;
background-color: #3a76c9;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
cursor: pointer;
`

const Container = styled.div `
height: 700px;
width: 800px;
margin-top: 60px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; 
p{
  text-align: center;
  color: white;
  font-size: 40px;
  margin-bottom: 100px;
  @media (max-width: 1200px) {
    margin-bottom: 100px;
    font-size: 35px;
  }
}
@media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`
const Carousel = styled(Slider)`
height: 500px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: white;
@media (max-width: 1200px) {
    width: 370px;
    height: 280px;
  }
img{
    width:400px;
    height: 350px;
    border-radius: 5%;
    @media (max-width: 1200px) {
    width: 240px;
    height: 180px;
    margin: 10px 0 40px 0;
  }
}
.slick-dots li button:before {
  color: white; 
}
p{
  color: white;
  font-size: 32px;
  margin-top: 10px;
  display: flex;
  flex-direction:column;
  @media (max-width: 1200px) {
    font-size: 27px;
    line-height: 30px;
  }
  b{
    color: white;
    font-size: 25px;
    margin-top: 15px;
    @media (max-width: 1200px) {
      font-size: 23px;
      line-height: 25px;
      margin-bottom: 30px;
    }
  }
}

`