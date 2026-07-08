/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { type JSX, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import { type PlanetProps } from './Planet.types';

/**
 * Render the final JSX of Planet
 */
export const Planet: React.FC<PlanetProps> = (props: PlanetProps): JSX.Element => {
  const { position, size = 6 } = props;

  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!!meshRef) return undefined;
    const { current } = meshRef as any;
    if (!!current) return undefined;
    const { rotation } = current as any;

    return (rotation.x += delta);
  });

  return (
    <mesh
      ref={meshRef}
      scale={1}
      onClick={(event) => console.log('planet click')}
      onPointerOver={(event) => console.log('planet hover:in')}
      onPointerOut={(event) => console.log('planet hover:out')}
      position={position}
    >
      <sphereGeometry args={[size, size * 8, size * 8]} />
      <meshStandardMaterial color={'hotPink'} />
    </mesh>
  );
};
