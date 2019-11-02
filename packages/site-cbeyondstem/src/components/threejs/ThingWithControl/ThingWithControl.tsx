/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Fog } from 'three'
import { PointerEvent, extend, useThree, useFrame, RenderCallback, CanvasContext } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

/// <reference path="../../types/three-jsm.d.ts"/>
extend({ OrbitControls })
extend({ Fog })

const Controls: React.FunctionComponent<React.ComponentPropsWithRef<'orbitControls'>> = props => {
  const orbitRef = React.useRef<OrbitControls>(null)
  const { camera, gl } = useThree()
  const { ref, args, ...others } = props
  const myFrameCallback: RenderCallback = (state: CanvasContext, delta: number) => {
    if (orbitRef.current) {
      orbitRef.current.update()
    }
  }
  useFrame(myFrameCallback)
  return <orbitControls ref={orbitRef} args={[camera, gl.domElement]} {...others} />
}
const Plane: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="red" opacity={0.5} transparent />
  </mesh>
)
export interface ThingWithControlProps {
  box?: React.ComponentPropsWithRef<'boxBufferGeometry'>
  control?: React.ComponentPropsWithRef<'orbitControls'>
}
export const Box: React.FunctionComponent<React.ComponentPropsWithRef<'boxBufferGeometry'>> = props => {
  const [hovered, setHovered] = React.useState(false)
  const [active, setActive] = React.useState(false)
  const springProps = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray'
  })
  const { attach, args, ...others } = props
  return (
    <a.mesh
      onClick={(e: PointerEvent) => setActive(!active)}
      onPointerOver={(e: PointerEvent) => setHovered(true)}
      onPointerOut={(e: PointerEvent) => setHovered(false)}
      scale={springProps.scale}
      castShadow
    >
      <ambientLight intensity={2} />
      <spotLight position={[0, 5, 5]} penumbra={1} castShadow />
      <boxBufferGeometry attach={attach || 'geometry'} args={args || [1, 1]} {...others} />
      {false && <a.meshBasicMaterial attach="material" color={springProps.color} opacity={0.5} transparent />}
      <a.meshPhysicalMaterial attach="material" color={springProps.color} opacity={0.5} transparent />
    </a.mesh>
  )
}

export const ThingWithControl: React.FunctionComponent<ThingWithControlProps> = props => {
  const { box, control } = props
  return (
    <>
      <fog attach="fog" args={[0xf8f8ff, 5, 15]} />
      <Controls {...control} />
      <Plane />
      <Box {...box} />
    </>
  )
}
