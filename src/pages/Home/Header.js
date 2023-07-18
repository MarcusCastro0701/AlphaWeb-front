import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
export default function Header() {
  return (
    <Container>
      <div>ALPHA WEB</div>
    </Container>
  );
}

const Container = styled.div`
background-color: red;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:150px;
`;
