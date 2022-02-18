import React from "react";
import Particles from "react-tsparticles";
import './Particle.css';
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

 const ParticleComponent=(props) =>{
  return (
    <div className="box">
      <Particles style={{position:'absolute'}}
      options= {props.theme=="light"?configLight:configDark}
      />
    </div>

  );
}
export default ParticleComponent;