import React, { Component } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

class FogComponent extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xe1ff00,
      midtoneColor: 0xeb3921,
      lowlightColor: 0x272537,
      baseColor: 0x354291,
      blurFactor: 0.78,
      speed: 2.10,
      zoom: 0.8
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}>
        {this.props.children}
      </div>
    );
  }
}

export default FogComponent;
