/* eslint-disable no-param-reassign */
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

export const Panorama: React.FunctionComponent<ImageProps> = props => {
  const ref = React.useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >(null)
  const { url } = props
  const texture = React.useMemo(
    () =>
      new THREE.TextureLoader().load(url, (t: THREE.Texture) => {
        t.encoding = THREE.sRGBEncoding
        t.anisotropy = 16
      }),
    [url]
  )
  // useFrame((state: CanvasContext, delta: number) => {
  //   if (ref.current) {
  //     const rot: THREE.Euler = ref.current.rotation as THREE.Euler
  //     rot.z += 0.01
  //   }
  // })
  return (
    <mesh
      ref={ref}
      onClick={(e: PointerEvent) => console.log(`click ${e}`)}
      onPointerOver={(e: PointerEvent) => console.log(`hover ${e}`)}
      onPointerOut={(e: PointerEvent) => console.log(`unhover ${e}`)}
      scale={[-1, 1, 1]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1]} />
      {true && (
        <meshBasicMaterial
          attach="material"
          color="hotpink"
          opacity={0.5}
          transparent
        />
      )}
    </mesh>
  )
}

// {false && <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
// <meshBasicMaterial attach="material" color="red">
//   <primitive attach="map" object={texture} />
// </meshBasicMaterial>
// }
