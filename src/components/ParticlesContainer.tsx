import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { particleOptions } from '../particleOptions';

const ParticlesContainer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsReady(true));
  }, []);

  const getRandomParticles = () => {
    const keys = Object.keys(particleOptions);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return particleOptions[keys[randomIndex]];
  };

  return isReady ? (
    <div style={{ position: 'absolute', zIndex: -1 }}>
      <Particles options={getRandomParticles()} />
    </div>
  ) : null;
};

export default ParticlesContainer;
