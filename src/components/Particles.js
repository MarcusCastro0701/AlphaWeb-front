import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(() =>{
        return{};
    },[])
    const particlesInit = useCallback((engine)=>{
        loadSlim(engine)
        //loadFull(engine)
    },[])
    return <Particles init={particlesInit} options={options}/>
}

export default ParticlesComponent