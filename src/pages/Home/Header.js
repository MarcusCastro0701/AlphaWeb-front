import styled from "styled-components";
import React, { useState } from 'react';
import 'primeicons/primeicons.css';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      <HeaderItems>
      <h1
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i
        className={`pi pi-bitcoin ${isHovered ? 'pi-spin' : ''}`}
        style={{ fontSize: '2rem' }}
      ></i>
      ALPHA WEB
    </h1>
        <div
          className={selectedItem === 'home' ? 'selected' : ''}
          onClick={() => handleItemClick('home')}
        >
          Home
        </div>
        <div
          className={selectedItem === 'sobre' ? 'selected' : ''}
          onClick={() => handleItemClick('sobre')}
        >
          Sobre nós
        </div>
        <div
          className={selectedItem === 'equipe' ? 'selected' : ''}
          onClick={() => handleItemClick('equipe')}
        >
          Equipe
        </div>
        <div
          className={selectedItem === 'servicos' ? 'selected' : ''}
          onClick={() => handleItemClick('servicos')}
        >
          Serviços
        </div>
      </HeaderItems>
    </Container>
  );
}


const Container = styled.div`
	background: linear-gradient(90deg, rgba(0,58,75,1) 0%, rgba(25,127,190,1) 54%,rgba(0,133,143,1) 100%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:150px;
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

const HeaderItems = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
width:90%;
  h1 {
    font-size: 30px;
    color: #00efff;
    display: flex;
    justify-content: space-between;
    width: 230px;
  }

  div {
    cursor: pointer;
    font-size: 20px;
    font-weight:600;
  }

  .selected {
    color: #00efff;
  }
`;
