import styled from "styled-components";
import React, { useCallback } from 'react';
import SobreNos from "../../components/SobreNos";
import Inicio from "../../components/Inicio";
import Equipe from "../../components/Equipe";
import Servicos from "../../components/Servicos";
import Particles from "react-tsparticles";
import particlesOptions from "./../../particles.json"
import { loadFull } from "tsparticles";
export default function Timeline(){

      const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    


    return(
    

        <MainContainer>
               <Particles options={particlesOptions} init={particlesInit}/>
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
