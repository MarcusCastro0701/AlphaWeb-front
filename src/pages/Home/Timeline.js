import styled from "styled-components";
import React, { useState } from 'react';
import SobreNos from "../../components/SobreNos";
import Inicio from "../../components/Inicio";
import Equipe from "../../components/Equipe";
import fundo from "../../assets/images/fundo.png"
import Servicos from "../../components/Servicos";

export default function Timeline(){

    
    const backgroundStyle = {
        backgroundImage: `url(${fundo})`,
        opacity: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      };


    return(
    

        <MainContainer style={backgroundStyle}>

           <Inicio/>

            <SobreNos/>

            <Equipe/>

            <Servicos/>

        </MainContainer>
  

        
    )
}

const MainContainer = styled.div `
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 60px;
padding-top: 150px;
z-index: 0;
`
