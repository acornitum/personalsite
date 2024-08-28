/*import logo from "./logo.svg";*/
import "./App.css";
import React, { useState, useEffect } from "react";
import Mobile from "./components/mobile";
import Desktop from "./components/desktop";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="App">{isMobile ? <Mobile /> : <Desktop />}</div>;
}
