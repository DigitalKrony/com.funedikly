/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { type JSX, Suspense, useEffect } from 'react';
import { WebGPURenderer } from 'three/webgpu';
import { Canvas, createRoot } from '@react-three/fiber';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';

import { useShellContext } from './../../Shell';
import type { StageProps } from './Stage.types';

/**
 * Render the final JSX of Stage
 */
export const Stage: React.FC<StageProps> = (props: StageProps): JSX.Element => {
  const { children } = props;
  const { canvas, setCanvas, canvasRef, renderer, setRenderer } = useShellContext((ctx) => ctx);

  useEffect(() => {
    if (!!!canvasRef) return;
    if (!!!canvasRef.current) return;
    const { current } = canvasRef as any;

    if (!!!canvas) {
      setCanvas(createRoot(current));
    }

    return () => {
      !!canvas && current.unmount();
    };
  }, []);

  return (
    <Suspense fallback={null}>
      <Canvas
        ref={canvasRef}
        gl={async (props) => {
          const renderer = new WebGPURenderer(props as any);
          await renderer.init();
          setRenderer(renderer);
          return renderer;
        }}
      >
        <spotLight position={[50, 10, 50]} angle={0.15} penumbra={2} decay={0} intensity={Math.PI} />
        <pointLight position={[-50, -10, -50]} decay={0} intensity={Math.PI} />

        {children}

        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={3} height={400} />
          <Bloom luminanceThreshold={0.4} intensity={2} mipmapBlur renderToScreen={true} />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
};
