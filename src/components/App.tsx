import { css, Global } from '@emotion/react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import particlesOptions from 'particles/particles.json';
import cursorImage from 'images/cursor.png';
import ImagesContainer from './ImagesContainer';
import Footer from './Footer';

const globalStyles = css`
  * {
    cursor: url(${cursorImage}), auto;
  }
`;

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Particles init={loadFull} options={particlesOptions as ISourceOptions} />
    <ImagesContainer />
    <Footer />
  </>
);

export default App;
