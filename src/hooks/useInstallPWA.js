// src/hook/useInstallPWA.js
import { useEffect, useState } from "react";

export function useInstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Already installed — running in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // iOS Safari — no beforeinstallprompt, detect manually
    const isIos = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    const isStandalone = window.navigator.standalone;
    if (isIos && !isStandalone) {
      setIsInstallable(true); // show iOS instructions banner
    }

    // ✅ Key fix: listener must be added immediately on mount
    // beforeinstallprompt fires AFTER the page loads — so we
    // register the handler right away and update state when it fires
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true); // ← this triggers the banner to show
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []); // ✅ empty array — register once, state updates trigger re-render

  const install = async () => {
    if (!deferredPrompt) return false;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    if (outcome === "accepted") {
      setIsInstalled(true);
      setIsInstallable(false);
    }
    return outcome === "accepted";
  };

  return { isInstallable, isInstalled, install };
}