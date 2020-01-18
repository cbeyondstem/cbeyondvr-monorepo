/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import * as THREE from 'three'
import {
  useFrame,
  useUpdate,
  RenderCallback,
  CanvasContext,
  PointerEvent,
  ReactThreeFiber,
} from 'react-three-fiber'

/// <reference path="../../types/react-spring-three.d.ts"/>
import { useSpring, a } from 'react-spring/three'

interface PanoramaProps
  extends React.ComponentPropsWithRef<'sphereBufferGeometry'> {
  url: string | string[]
}

// var isUserInteracting = false,
// onMouseDownMouseX = 0, onMouseDownMouseY = 0,
// lon = 0, onMouseDownLon = 0,
// lat = 0, onMouseDownLat = 0,
// phi = 0, theta = 0;

// init();
// animate();

// function init() {

// var container, mesh;

// container = document.getElementById( 'container' );

// camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
// camera.target = new THREE.Vector3( 0, 0, 0 );

// scene = new THREE.Scene();

// var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
// // invert the geometry on the x-axis so that all of the faces point inward
// geometry.scale( - 1, 1, 1 );

// var texture = new THREE.TextureLoader().load( 'textures/2294472375_24a3b8ef46_o.jpg' );
// var material = new THREE.MeshBasicMaterial( { map: texture } );

// mesh = new THREE.Mesh( geometry, material );

// scene.add( mesh );

// renderer = new THREE.WebGLRenderer();
// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth, window.innerHeight );
// container.appendChild( renderer.domElement );

// document.addEventListener( 'mousedown', onPointerStart, false );
// document.addEventListener( 'mousemove', onPointerMove, false );
// document.addEventListener( 'mouseup', onPointerUp, false );

// document.addEventListener( 'wheel', onDocumentMouseWheel, false );

// document.addEventListener( 'touchstart', onPointerStart, false );
// document.addEventListener( 'touchmove', onPointerMove, false );
// document.addEventListener( 'touchend', onPointerUp, false );

// //

// document.addEventListener( 'dragover', function ( event ) {

//   event.preventDefault();
//   event.dataTransfer.dropEffect = 'copy';

// }, false );

// document.addEventListener( 'dragenter', function () {

//   document.body.style.opacity = 0.5;

// }, false );

// document.addEventListener( 'dragleave', function () {

//   document.body.style.opacity = 1;

// }, false );

// document.addEventListener( 'drop', function ( event ) {

//   event.preventDefault();

//   var reader = new FileReader();
//   reader.addEventListener( 'load', function ( event ) {

//     material.map.image.src = event.target.result;
//     material.map.needsUpdate = true;

//   }, false );
//   reader.readAsDataURL( event.dataTransfer.files[ 0 ] );

//   document.body.style.opacity = 1;

// }, false );

// //

// window.addEventListener( 'resize', onWindowResize, false );

// }

// function onWindowResize() {

// camera.aspect = window.innerWidth / window.innerHeight;
// camera.updateProjectionMatrix();

// renderer.setSize( window.innerWidth, window.innerHeight );

// }

// function onPointerStart( event ) {

// isUserInteracting = true;

// var clientX = event.clientX || event.touches[ 0 ].clientX;
// var clientY = event.clientY || event.touches[ 0 ].clientY;

// onMouseDownMouseX = clientX;
// onMouseDownMouseY = clientY;

// onMouseDownLon = lon;
// onMouseDownLat = lat;

// }

// function onPointerMove( event ) {

// if ( isUserInteracting === true ) {

//   var clientX = event.clientX || event.touches[ 0 ].clientX;
//   var clientY = event.clientY || event.touches[ 0 ].clientY;

//   lon = ( onMouseDownMouseX - clientX ) * 0.1 + onMouseDownLon;
//   lat = ( clientY - onMouseDownMouseY ) * 0.1 + onMouseDownLat;

// }

// }

// function onPointerUp() {

// isUserInteracting = false;

// }

// function onDocumentMouseWheel( event ) {

// var fov = camera.fov + event.deltaY * 0.05;

// camera.fov = THREE.Math.clamp( fov, 10, 75 );

// camera.updateProjectionMatrix();

// }

// function animate() {

// requestAnimationFrame( animate );
// update();

// }

// function update() {

// if ( isUserInteracting === false ) {

//   lon += 0.1;

// }

// lat = Math.max( - 85, Math.min( 85, lat ) );
// phi = THREE.Math.degToRad( 90 - lat );
// theta = THREE.Math.degToRad( lon );

// camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
// camera.target.y = 500 * Math.cos( phi );
// camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

// camera.lookAt( camera.target );

// /*
// // distortion
// camera.position.copy( camera.target ).negate();
// */

// renderer.render( scene, camera );
// }
export const Panorama: React.FunctionComponent<PanoramaProps> = props => {
  const { attach, args, url, ...others } = props
  const ref = React.useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >(null)
  const [hovered, setHovered] = React.useState(false)
  const [active, setActive] = React.useState(false)
  const springProps = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray',
  })
  let texture
  if (typeof url === 'string') {
    texture = React.useMemo(
      () =>
        new THREE.TextureLoader().load(url, (t: THREE.Texture) => {
          t.encoding = THREE.sRGBEncoding
          t.anisotropy = 16
          console.log('TextureLoader')
        }),
      [url]
    )
  } else {
    texture = React.useMemo(
      () =>
        new THREE.CubeTextureLoader().load(url, (t: THREE.CubeTexture) => {
          t.encoding = THREE.sRGBEncoding
          t.anisotropy = 16
          t.minFilter = THREE.NearestFilter
          console.log('CubeTextureLoader')
        }),
      [...url]
    )
  }
  const myFrameCallback: RenderCallback = (
    state: CanvasContext,
    delta: number
  ) => {
    if (ref.current) {
      const rot: THREE.Euler = ref.current.rotation as THREE.Euler
      // rot.z += 0.01
      rot.y -= 0.001
    }
  }
  useFrame(myFrameCallback)
  const refGeom = useUpdate(
    (geometry: THREE.SphereBufferGeometry) => {
      if (typeof url === 'string') {
        geometry.scale(-1, 1, 1)
      } else {
        geometry.scale(-1, 1, 1)
        geometry.rotateY(Math.PI)
      }
    },
    [-1, 1, 1] // execute only if these properties change
  )
  return (
    <a.mesh
      ref={ref}
      onClick={(e: PointerEvent) => setActive(!active)}
      onPointerOver={(e: PointerEvent) => setHovered(true)}
      onPointerOut={(e: PointerEvent) => setHovered(false)}
    >
      <sphereBufferGeometry
        ref={refGeom}
        attach={attach || 'geometry'}
        args={args || [800, 60, 40]}
        {...others}
      />
      <a.meshBasicMaterial attach="material">
        <primitive
          attach={typeof url === 'string' ? 'map' : 'map'}
          object={texture}
        />
      </a.meshBasicMaterial>
    </a.mesh>
  )
}
