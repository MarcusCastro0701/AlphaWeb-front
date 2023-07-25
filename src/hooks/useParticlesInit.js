import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

export default function useParticlesInit() {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

  return particlesInit;
}