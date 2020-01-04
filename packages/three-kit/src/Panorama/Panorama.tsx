import * as React from 'react'
import {
  useFrame,
  RenderCallback,
  CanvasContext,
  PointerEvent,
  ReactThreeFiber,
} from 'react-three-fiber'
import * as THREE from 'three'

interface ImageProps extends React.ComponentPropsWithRef<'img'> {
  url: string
}

export const Image: React.FunctionComponent<ImageProps> = props => {
  const { url } = props
  const texture = React.useMemo(() => new THREE.TextureLoader().load(url), [
    url,
  ])
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshLambertMaterial attach="material" transparent>
        <primitive attach="map" object={texture} />
      </meshLambertMaterial>
    </mesh>
  )
}

export interface PanoramaProps extends React.ComponentPropsWithRef<'div'> {
  color: string
}

export const Panorama: React.FunctionComponent<PanoramaProps> = props => {
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
