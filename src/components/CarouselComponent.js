import React from 'react';
import styled from "styled-components";

export default function TeamMember(props){
    return (
        <CarouselContainer>
          <img src={props.imgSrc} />
          <p>Marcus Castro</p>
          <h1>Engenheiro de Software</h1>
        </CarouselContainer>
      );
}

const CarouselContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
  color: white;
  font-size: 40px;
  line-height: 70px;
  margin-top: 20px;
}
h1{
  color: white;
  font-size: 25px;
  line-height: 50px;
}
`


