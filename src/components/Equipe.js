import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import alvaro from "../assets/images/alvaro.jpg";
import marcus from "../assets/images/marcus.jpg";
import TeamMember from "./CarouselComponent";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Equipe(){


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
          <Container>
            <p>Nossa equipe</p>
            <Carousel {...settings}>
              <div>
                <TeamMember imgSrc={marcus}/>
              </div>
              <div>
                <TeamMember imgSrc={marcus}/>
              </div>
              <div>
                <TeamMember imgSrc={marcus}/>
              </div>
              <div>
                <TeamMember imgSrc={marcus}/>
              </div>
              <div>
                <TeamMember imgSrc={marcus}/>
              </div>
              <div>
                <TeamMember imgSrc={marcus}/>
              </div>
            </Carousel>
          </Container>
        );
}



const Container = styled.div `
height: 600px;
width: 800px;
margin-top: 60px;
border-radius: 15px;
p{
  text-align: center;
  color: white;
  font-size: 40px;
}
`
const Carousel = styled(Slider)`
height: 500px;
display: flex;
align-items: center;
justify-content: center;
color: white;
img{
    width:400px;
    height: 300px;
    border-radius: 5%;
}

`