import styled from "styled-components";
import React, { useState, useEffect } from 'react';

export default function Servicos(){

    return(
        <SubContainer>
            <p>Serviços</p>
        </SubContainer>
    )

}

const SubContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 600px;
height: 600px;
background-color: #06066b;
margin-top: 60px;
border-radius: 15px;
p{
    font-size: 60px;
    color: white;
}
video{
    width: 500px;
    height: 600px;
    border-radius: 15px;
}
`