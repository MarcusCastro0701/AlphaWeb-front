import styled from "styled-components";
import React, { useState } from 'react';
import fotohome from "../assets/images/fotohome.jpg"

export default function Inicio(){

    return(
        <Container>
            <SubContainerLeft>
                <p>
                    AlphaWeb
                </p>
                <h1>
                    Desenvolvendo e aplicando com o melhor método.
                </h1>
                <h2>
                    Transforme sua presença online conosco: desenvolvimento web e marketing digital que impulsionam negócio.
                </h2>

            </SubContainerLeft>

            <SubContainerRight>
            </SubContainerRight>
        </Container>
    )

}

const Container = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 90%;
height: 600px;
background-color: none;
margin-top: 60px;
border-radius: 15px;
p{
    font-size: 60px;
    color: white;
}
`
const SubContainerLeft = styled.div`
width: 90%;
height: 100%;
border-radius: 15px 0 0 15px;
padding-left: 10%;
p{
    font-size: 140px;
    color: #3a76c9;
}
h1{
    margin-top: 30px;
    font-size: 20px;
    color: white;
}
h2{
    margin-top: 30px;
    font-size: 40px;
    color: white;
}
`

const ImgContainer = styled.div`
display: flex;
align-items: center;
border-radius: 90px;
img{
    padding: 30px 0 0 90px;
    width: 750px;
    height: 400px;
}
`

const SubContainerRight = styled.div`
width: 10%;
height: 100%;
border-radius: 0 15px 15px 0;
p{
    font-size: 20px;
    color: white;
}
`