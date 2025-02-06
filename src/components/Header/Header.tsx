/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";

import type { HeaderProps } from "./Header.types";
import { useHeaderStyles } from "./Header.styles";

/**
 * Render the final JSX of Header
 */
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { children } = props;
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.pageTitle}>Design: Funedikly</h1>
      <p className={classes.titleBy}>From Adam Sivins</p>
    </div>
  );
};
 