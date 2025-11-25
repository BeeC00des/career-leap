import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Temporarily disable Service Worker to bypass stale cached bundles
if ('serviceWorker' in navigator) {
  // Unregister any existing SWs and clear caches
  navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((reg) => reg.unregister());
  });
  if ('caches' in window) {
    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
  }
}

createRoot(document.getElementById("root")!).render(<App />);
