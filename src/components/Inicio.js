import styled from "styled-components";
import React, { useState } from 'react';

export default function Inicio(){

    return(
        <SubContainer>
            <p>
                Home
            </p>
        </SubContainer>
    )

}

const SubContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 600px;
background-color: "" ;
margin-top: 60px;
border-radius: 15px;
p{
    font-size: 60px;
    color: white;
}
`