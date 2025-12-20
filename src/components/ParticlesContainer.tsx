import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { particleOptionsTemplates } from '../particleOptionsTemplates';
import './ParticlesContainer.css';

const ParticlesContainer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsReady(true));
  }, []);

  const key = import.meta.env.VITE_SITE_NAME === 'skylar' ? 'nasa' : 'snow';

  return isReady ? (
    <div className="particlesContainer">
      <Particles options={particleOptionsTemplates[key]} />
    </div>
  ) : null;
};

export default ParticlesContainer;
