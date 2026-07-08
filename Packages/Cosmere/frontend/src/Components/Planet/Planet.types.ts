/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/**
 *  PlanetProps
 */
export type PlanetProps = React.PropsWithChildren & {
  className?: string;
  size?: number;
  position?: [number, number, number]
};
