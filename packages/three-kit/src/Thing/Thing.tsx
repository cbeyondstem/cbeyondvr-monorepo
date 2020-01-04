import * as React from 'react'
import {
  useFrame,
  RenderCallback,
  CanvasContext,
  PointerEvent,
  ReactThreeFiber,
} from 'react-three-fiber'
import * as THREE from 'three'

interface ThingState {
  color: string
}

export const Thing: React.FunctionComponent<React.ComponentPropsWithRef<
  'div'
>> = props => {
  const ref = React.useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >(null)
  const myFrameCallback: RenderCallback = (
    state: CanvasContext,
    delta: number
  ) => {
    if (ref.current) {
      const rot: THREE.Euler = ref.current.rotation as THREE.Euler
      rot.z += 0.01
    }
  }
  useFrame(myFrameCallback)
  return (
    <mesh
      ref={ref}
      onClick={(e: PointerEvent) => console.log(`click ${e}`)}
      onPointerOver={(e: PointerEvent) => console.log(`hover ${e}`)}
      onPointerOut={(e: PointerEvent) => console.log(`unhover ${e}`)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  )
}
