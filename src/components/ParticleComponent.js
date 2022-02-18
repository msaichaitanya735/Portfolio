import React from "react";
import Particles from "react-tsparticles";
import './Particle.css';
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

export default function App() {
  return (
    <div className="box">
      <Particles style={{position:'absolute'}}
      options={configLight}
      />
    </div>

  );
}
