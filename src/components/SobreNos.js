import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import YouTube from 'react-youtube';

export default function SobreNos(){

    // const opts = {
    //     height: '250',
    //     width: '400',
    //     playerVars: {
    //       controls: 0,
    //       fs: 0,
    //       iv_load_policy: 3,
    //       modestbranding: 1,
    //       showinfo: 0,
    //       modestbranding: 1,
    //       loop: 0,
    //       rel: 0,
    //     },
    //   };

    return(

        <SubContainer id="1">

                <p>Sobre Nós</p>
                
                <ReactPlayer
                        url="https://vimeo.com/846995621?share=copy"
                        width="640px"
                        height="360px"
                        controls={true}
                        style={{
                        borderRadius: '15px',
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
iframe{
    border-radius: 15px;
    border: 5px solid black;
    height: 800px;
}
`

const VideoContainer = styled.div`
border-radius: 15px;
`

