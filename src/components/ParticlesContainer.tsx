import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { particleOptions } from '../particleOptions';

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const getRandomParticles = () => {
    const keys = Object.keys(particleOptions);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return particleOptions[keys[randomIndex]];
  };

  return init ? (
    <div style={{ position: 'absolute', zIndex: -1 }}>
      <Particles options={getRandomParticles()} />
    </div>
  ) : null;
};

export default ParticlesContainer;
