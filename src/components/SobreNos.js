import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import video from "../assets/videos/video.mp4"
import ReactPlayer from "react-player";

export default function SobreNos(){

    return(

        <SubContainer id="1">

                <p>Sobre Nós</p>
                <ReactPlayer
                    src={video}
                    url={video}
                    width="100%"
                    controls={true}
                    style={{
                    borderRadius: '5px',
                    outline: 'none',
                    }}
                    config={{
                    file: {
                        attributes: {
                        controlsList: 'nodownload',
                        },
                    },
                    }}
                />

        </SubContainer >

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