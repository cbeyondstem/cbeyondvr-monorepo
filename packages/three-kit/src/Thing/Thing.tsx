/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import * as THREE from 'three'
import { useFrame, RenderCallback, CanvasContext, PointerEvent, ReactThreeFiber } from 'react-three-fiber'

/// <reference path="../../types/react-spring-three.d.ts"/>
import { useSpring, a } from 'react-spring/three'

export const Thing: React.FunctionComponent<React.ComponentPropsWithRef<'boxBufferGeometry'>> = props => {
  const ref = React.useRef<ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>>(null)
  const [hovered, setHovered] = React.useState(false)
  const [active, setActive] = React.useState(false)
  const springProps = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray'
  })
  const myFrameCallback: RenderCallback = (state: CanvasContext, delta: number) => {
    if (ref.current) {
      const rot: THREE.Euler = ref.current.rotation as THREE.Euler
      // rot.z += 0.01
      rot.y -= 0.01
    }
  }
  const { attach, args, ...others } = props
  useFrame(myFrameCallback)
  return (
    <a.mesh
      ref={ref}
      onClick={(e: PointerEvent) => setActive(!active)}
      onPointerOver={(e: PointerEvent) => setHovered(true)}
      onPointerOut={(e: PointerEvent) => setHovered(false)}
      scale={springProps.scale}
    >
      <boxBufferGeometry attach={attach || 'geometry'} args={args || [1, 1]} {...others} />
      <a.meshBasicMaterial attach="material" color={springProps.color} opacity={0.5} transparent />
    </a.mesh>
  )
}
