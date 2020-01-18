/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Overwrite, ReactThreeFiber } from 'react-three-fiber'
import { Fog } from 'three'

type OrbitControlNode<T extends OrbitControls, P> = Overwrite<ReactThreeFiber.Node<T, P>, {}>
type FogNode<T extends Fog, P> = Overwrite<ReactThreeFiber.Node<T, P>, {}>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: OrbitControlNode<OrbitControls, typeof OrbitControls>
      fog: FogNode<Fog, typeof Fog>
    }
  }
}
