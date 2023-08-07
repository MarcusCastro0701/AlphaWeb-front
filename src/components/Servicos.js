import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import LoadServices from "./LoadServices";
import {HiCode} from "react-icons/hi"
import {GoGraph} from "react-icons/go"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Servicos(){
    const services = [
      {  name:"Marketing",
        description:`
         Tráfego pago  
        -Gerenciamento de redes sociais 
        -Criação de logo
        -Criação de criativo`,
        icon:<GoGraph color={"#3A76C9"} fontSize={"5vh"}/>},
      {  name:"Programação",
        description:`
        Criação de Websites
        -Manutenção sites `,
      icon:<HiCode color={"#3A76C9"} fontSize={"5vh"}/>}]
    

    return(
        <SubContainer>
       <p>Serviços</p>
      <Services>
      {services.map((item)=> <LoadServices key={item.id} name={item.name} description={item.description.split("-")} icon={item.icon} />)}
      </Services>
        </SubContainer>
    )

}

const Container = styled.div `
display: flex;
margin-top: 25px;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 700px;
margin-top: 60px;
background-color: lightsalmon;
p{
    font-size: 60px;
    color: white;
}
@media(max-width: 1200px) {
  position:relative;
}
`
const Services = styled.div`
  height:65vh;
  width:80%;
  margin-top: 20px;
`
