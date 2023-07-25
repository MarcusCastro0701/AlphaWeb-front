import styled from "styled-components";
import React, { useState, useRef } from 'react';
import 'primeicons/primeicons.css';
import scroll from "../../hooks/Scroll";
import LogoNoBG from "../img/LogoNoBG.png"
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
    setSelectedItem(item.item);
    scroll(item.position);
  };

  return (
    <Container>
      <HeaderItems>
        <Logo>
        <img
    src={LogoNoBG}
    alt="Logo"
    style={{ width: '4rem' }}
  />
        <h1
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      ALPHA WEB
    </h1>
        </Logo>
        <div
          className={selectedItem === 'home' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'home', position: 0})}
        >
          Home
        </div>
        <div
          className={selectedItem === 'sobre' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'sobre', position: 720})}
        >
          Sobre nós
        </div>
        <div
          className={selectedItem === 'equipe' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'equipe', position: 1270})}
        >
          Equipe
        </div>
        <div
          className={selectedItem === 'servicos' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'servicos', position: 10000000})}
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
position: fixed;
z-index: 100000;
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

const Logo = styled.div`
width:250px;
display:flex;
justify-content:space-around;
align-items:center;
`
