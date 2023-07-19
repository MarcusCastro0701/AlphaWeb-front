import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import logo from "../../assets/images/logo.png"

export default function Header() {
  return (
    <Container>
      <img src={logo} alt=''></img>
    </Container>
  );
}

const Container = styled.div`
background-color: lightgray;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:150px;
img{
  width:1000px;
}
`;
