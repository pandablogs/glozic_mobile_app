import { Toaster } from "react-hot-toast";
import AllRoutes from "./routes/AllRoutes";
import { useEffect, useState } from "react";

function App() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // Prevent the default mini-infobar
      setDeferredPrompt(e); // Save the event for triggering later
      setShowButton(true);  // Show the install button
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
        setShowButton(false);
      });
    }
  };

  return (
    <>
      <AllRoutes showButton={showButton} handleInstallClick={handleInstallClick} />
      <Toaster />
    </>
  )
}

export default App;