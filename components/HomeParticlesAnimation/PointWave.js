import React, { Component } from 'react';
import * as THREE from 'three';
import CameraControls from 'camera-controls';


class PointWave extends Component {
  // eslint-disable-next-line max-statements
  componentDidMount () {

    const vertexShader = `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4( position, 0.9 );
          gl_PointSize = scale * ( 110.0 / - mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
        }`;
    const fragmentShader = `
        uniform vec3 color;

			  void main() {
          if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
          gl_FragColor = vec4( color, 0.8 );
			  }`;
    const SEPARATION = 150;
    const AMOUNTX = 100;
    const AMOUNTY = 70;
    let count = 0;
    let mouseX = 85;
    // eslint-disable-next-line no-unused-vars
    let mouseY = -600;
    let phase = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    var onPointerMove = function (e) {
      if (e.isPrimary === false) return;
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    };

    CameraControls.install({ THREE: THREE });
    var aspect = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(100, aspect, 1, 10000);
    camera.position.z=1200;
    camera.zoom = -100;


    var scene = new THREE.Scene();
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    let i = 0;
    let j = 0;
    for (let ix = 0; ix < AMOUNTX; ix ++) {
      for (let iy = 0; iy < AMOUNTY; iy ++) {
        positions[ i ] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        positions[ i + 1 ] = 0;
        positions[ i + 2 ] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
        scales[ j ] = 1;
        i += 3;
        j ++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xD1D9FF) }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    //var docWidth = window.innerWidth;
    var docWidth = document.documentElement.clientWidth || document.body.clientWidth;
    renderer.setSize(docWidth, window.innerHeight);

    this.mount.appendChild(renderer.domElement);
    this.mount.addEventListener('pointermove', onPointerMove, false);
    this.mount.addEventListener('resize', handleResize, false);

    var animate = function () {
      camera.position.x += (mouseX - camera.position.x) * .09;
      camera.position.y = 700;

      phase += 0.002;

      scene.rotation.y = (phase*0.2) * Math.PI;
      camera.lookAt(scene.position);


      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;

      let i = 0;
      let j = 0;
      for (let ix = 0; ix < AMOUNTX; ix ++) {
        for (let iy = 0; iy < AMOUNTY; iy ++) {
          positions[ i + 1 ] =
              (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
          scales[ j ] =
              // eslint-disable-next-line max-len
              (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
          i += 3;
          j ++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      window.requestAnimationFrame(animate);

      renderer.render(scene, camera);
      count += 0.1;
    };

    var handleResize = function (e) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    animate();
  }

  componentWillUnmount () {
    // window.cancelAnimationFrame();
    // this.mount.removeChild(this.renderer.domElement);
  }

  render () {
    return (
      <div
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default PointWave;
