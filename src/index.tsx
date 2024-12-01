import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from 'components/App';

document.title = process.env.REACT_APP_SKYLAR === 'true' ? 'skylar' : 'felix';

const WrappedApp = () => (
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<WrappedApp />);
