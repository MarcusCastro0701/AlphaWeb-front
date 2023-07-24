import styled from "styled-components";
import React, { useState } from 'react';
import {BsArrowDownShort} from "react-icons/bs"
import scroll from "../hooks/Scroll";


export default function Inicio(){

    return(
        <Container>
            <SubContainerLeft>
                <h1>
                    Desenvolvendo e aplicando 
                </h1>
                <p>
                    com o melhor método.
                </p>
                <h2>
                    Transforme sua presença online conosco: desenvolvimento web e marketing digital que impulsionam o seu negócio.
                </h2>
                <div onClick={() => scroll(710)}>
                    CONHEÇA A ALPHAWEB
                </div>
                <Icone onClick={() => scroll(710)}/>
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
    height: 700px;
    background-color: none;
    margin-top: 60px;
    border-radius: 15px;
    p{
        font-size: 20px;
        color: #197fbe;
    }
`
const SubContainerLeft = styled.div`
    width: 90%;
    height: 100%;
    border-radius: 15px 0 0 15px;
    padding-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 40px;
        color: #3a76c9;
        margin-top: 8px;
        font-weight: 700;
    }
    h1{
        margin-top: 0px;
        font-size: 40px;
        color: white;
        font-weight: 700;
    }
    h2{
        margin: 60px 0 60px 0;
        font-size: 23px;
        color: white;
        width: 800px;
        text-align: center;
    }
    div{
        width: 300px;
        height: 50px;
        color: white;
        background-color: #3a76c9;
        border: none;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

const Icone = styled(BsArrowDownShort)`
    height: 50px;
    width: 50px;
    color: white;
    margin-top: 15px;
    cursor: pointer;
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