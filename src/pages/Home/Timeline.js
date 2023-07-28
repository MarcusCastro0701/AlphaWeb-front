import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import SobreNos from "../../components/SobreNos";
import Inicio from "../../components/Inicio";
import Equipe from "../../components/Equipe";
import Servicos from "../../components/Servicos";
import Particles from "react-tsparticles";
import particles from "./../../ParticlesOptions/particles.json";
import particlesMobile from "./../../ParticlesOptions/particlesMobile.json";
import { loadFull } from "tsparticles";
import useParticlesInit from "../../hooks/useParticlesInit";

export default function Timeline() {
  const particlesInit = useParticlesInit()
  useEffect(() => {
      const main = document.getElementById("tsparticles");
      if (main) {
        loadFull(main);
      }
    }, []);

  return (
    <MainContainer>
<Particles id="tsparticles" options={particles} init={particlesInit} />
      <Inicio/>
      <SobreNos/>
      <Equipe/>
      <Servicos/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  padding-top: 150px;
  z-index: 0;
`;
