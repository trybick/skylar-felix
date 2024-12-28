import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import particlesOptions from '../particles.json';

const ParticlesContainer = () => (
  <Particles init={loadFull} options={particlesOptions as ISourceOptions} />
);

export default ParticlesContainer;
