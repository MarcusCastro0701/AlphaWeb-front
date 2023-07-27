import React from 'react';
import styled from "styled-components";

export default function TeamMember(props){
    return (
        <CarouselContainer>
          <img src={props.imgSrc} />
          <p>{props.name} <b>Marketing</b></p>
        </CarouselContainer>
      );
}

const CarouselContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
height:100%;
align-items: center;
justify-content: center;
border-radius:10%;
img{
  border-radius:10%;
}
p{
  color: white;
  font-size: 32px;
  margin-top: 10px;
  display: flex;
  flex-direction:column;
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
  @media (max-width: 1200px) {
    font-size: 30px;
    line-height: 30px;
  }
}
`


