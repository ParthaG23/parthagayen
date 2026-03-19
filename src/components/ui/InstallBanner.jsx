// src/components/ui/InstallBanner.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInstallPWA } from "../../hooks/useInstallPWA";

export default function InstallBanner() {
  const { isInstallable, isInstalled, install } = useInstallPWA();
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    setIsIos(/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()));
  }, []);

  // ✅ Key fix: watch isInstallable — show banner 1.5s after it becomes true
  // This runs whenever beforeinstallprompt fires and sets isInstallable = true
  useEffect(() => {
    if (!isInstallable || isInstalled) return;

    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, [isInstallable, isInstalled]); // ← depends on isInstallable, not just mount

  const handleInstall = async () => {
    if (isIos || installing) return;
    setInstalling(true);
    const accepted = await install();
    if (accepted) {
      setInstalled(true);
      setTimeout(() => setVisible(false), 1800);
    } else {
      setInstalling(false);
    }
  };

  if (!isInstallable || isInstalled) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed z-[5000] left-4 right-4 bottom-6 sm:left-auto sm:right-auto sm:bottom-6"
          style={{
            // Center on sm+ screens
            ...(typeof window !== "undefined" && window.innerWidth >= 640
              ? { left: "50%", translateX: "-50%", right: "auto" }
              : {}),
          }}
          initial={{ y: 120, opacity: 0, scale: 0.92 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 120, opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="flex justify-center">

            {/* Glow */}
            <div
              className="absolute -inset-2 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 100%, rgba(181,242,61,0.12) 0%, transparent 70%)",
                filter: "blur(12px)",
              }}
            />

            {/* Card */}
            <div
              className="relative flex items-center gap-3 rounded-2xl overflow-hidden w-full sm:min-w-[320px] sm:max-w-[400px]"
              style={{
                background: "rgba(15, 18, 12, 0.95)",
                border: "1px solid rgba(181,242,61,0.18)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                padding: "12px 14px",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Shimmer */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(181,242,61,0.5), transparent)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              />

              {/* App icon */}
              <motion.div
                className="relative flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 44, height: 44,
                  background: "linear-gradient(135deg, #1c2a0e 0%, #0d0f0b 100%)",
                  border: "1px solid rgba(181,242,61,0.3)",
                  boxShadow: "0 0 20px rgba(181,242,61,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-black tracking-wider select-none" style={{ color: "#b5f23d", fontSize: 13 }}>
                  PG
                </span>
                <motion.span
                  className="absolute -top-1 -right-1 rounded-full"
                  style={{ width: 8, height: 8, background: "#b5f23d", border: "2px solid #0f1209" }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
              </motion.div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate" style={{ fontSize: 13 }}>
                  {installed ? "Installed! 🎉" : "Install Partha.dev"}
                </p>
                {isIos ? (
                  <p className="mt-0.5 truncate" style={{ fontSize: 10, color: "#6b7280" }}>
                    Tap <span style={{ color: "#b5f23d" }}>Share</span> → "Add to Home Screen"
                  </p>
                ) : (
                  <p className="mt-0.5 truncate" style={{ fontSize: 10, color: "#6b7280" }}>
                    {installed ? "Check your home screen" : "Works offline · Add to home screen"}
                  </p>
                )}
              </div>

              {/* Install button */}
              {!isIos && !installed && (
                <motion.button
                  onClick={handleInstall}
                  disabled={installing}
                  className="relative flex-shrink-0 flex items-center gap-1.5 rounded-xl font-bold"
                  style={{
                    background: installing
                      ? "rgba(181,242,61,0.15)"
                      : "linear-gradient(135deg, #a8e832 0%, #b5f23d 50%, #c8ff50 100%)",
                    color: installing ? "#b5f23d" : "#0a0c09",
                    fontSize: 12,
                    padding: "9px 14px",
                    minHeight: 36,
                    border: installing ? "1px solid rgba(181,242,61,0.3)" : "none",
                    boxShadow: installing ? "none" : "0 4px 20px rgba(181,242,61,0.3)",
                    whiteSpace: "nowrap",
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {installing ? (
                    <>
                      <motion.span
                        className="inline-block w-3 h-3 rounded-full border-2"
                        style={{ borderColor: "rgba(181,242,61,0.3)", borderTopColor: "#b5f23d" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Installing</span>
                    </>
                  ) : (
                    "Install"
                  )}
                </motion.button>
              )}

              {/* Dismiss */}
              {!installed && (
                <motion.button
                  onClick={() => setVisible(false)}
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 32, height: 32,
                    color: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    fontSize: 18, lineHeight: 1,
                  }}
                  whileHover={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.08)" }}
                  whileTap={{ scale: 0.88 }}
                >
                  ×
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}