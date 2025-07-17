import { Toaster } from "react-hot-toast";
import AllRoutes from "./routes/AllRoutes";
import { useEffect, useState } from "react";

function App() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ User accepted the install prompt');
      } else {
        console.log('❌ User dismissed the install prompt');
      }

      // Reset prompt so it doesn’t show again
      setDeferredPrompt(null);
      setShowInstall(false);
    });
  };

  return (
    <>

      {/* {showInstall && (
        <button onClick={handleInstallClick}>Install App</button>
      )} */}

      <AllRoutes
        showInstall={showInstall}
        handleInstallClick={handleInstallClick}
      />
      <Toaster />
    </>
  )
}

export default App;