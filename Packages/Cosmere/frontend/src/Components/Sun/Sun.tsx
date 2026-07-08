/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { type JSX, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

import { type SunProps } from './Sun.types';

/**
 * Render the final JSX of Sun
 */
export const Sun: React.FC<SunProps> = (props: SunProps): JSX.Element => {
  const { _size = { width: 2, height: 2 } } = props;

  const meshRef = useRef(null);
  const sunRef = useRef(null);

  return (
    <mesh ref={meshRef} scale={1}>
      <icosahedronGeometry ref={sunRef} args={[_size && _size?.width * 8, _size && _size?.height * 8]} />
      <meshStandardMaterial color={'#FDB813'} />
    </mesh>
  );
};
