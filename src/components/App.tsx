import { Suspense, lazy, useEffect, useState } from 'react';
import PasswordGate from './PasswordGate';
import { isUnlockedSession, setUnlockedSession } from '../utils/unlockSession';

const ParticlesContainer = lazy(() => import('./ParticlesContainer'));
const ImagesContainer = lazy(() => import('./ImagesContainer'));
const Footer = lazy(() => import('./Footer'));

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => isUnlockedSession());

  useEffect(() => {
    if (!isUnlocked) return;

    (async () => {
      await import('../cursor.css');
    })();
  }, [isUnlocked]);

  const onUnlock = () => {
    setUnlockedSession();
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return <PasswordGate onUnlock={onUnlock} />;
  }

  return (
    <Suspense fallback={null}>
      <ParticlesContainer />
      <ImagesContainer />
      <Footer />
    </Suspense>
  );
};

export default App;
