import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import particlesOptions from 'particles/particles.json';
import ImagesContainer from './ImagesContainer';
import Footer from './Footer';
import '../cursor.css';

const App = () => (
  <>
    <Particles init={loadFull} options={particlesOptions as ISourceOptions} />
    <ImagesContainer />
    <Footer />
  </>
);

export default App;
