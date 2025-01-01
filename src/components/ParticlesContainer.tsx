import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { particleOptionsTemplates } from '../particleOptionsTemplates';

const ParticlesContainer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsReady(true));
  }, []);

  const key = import.meta.env.VITE_SITE_NAME === 'skylar' ? 'nasa' : 'snow';

  return isReady ? (
    <div style={{ position: 'absolute', zIndex: -1 }}>
      <Particles options={particleOptionsTemplates[key]} />
    </div>
  ) : null;
};

export default ParticlesContainer;
