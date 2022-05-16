import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import particlesOptions from '../particles/particles.json';
import ImagesContainer from './ImagesContainer';
import Footer from './Footer';

const App = () => (
  <>
    <Particles options={particlesOptions as ISourceOptions} init={loadFull} />
    <ImagesContainer />
    <Footer />
  </>
);

export default App;
