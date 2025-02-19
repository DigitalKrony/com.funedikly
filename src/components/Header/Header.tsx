/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";

import { Grid, Type } from './../../components';

import type { HeaderProps } from "./Header.types";
import { useHeaderStyles } from "./Header.styles";

/**
 * Render the final JSX of Header
 */
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { children } = props;
  const classes = useHeaderStyles();

  return (
    <Grid container className={classes.root} itemDirection={'column'}>
      <Grid item columns={{ base: 1 }}>
        <Type type={'hero'} level={'sm'} className={classes.pageTitle}>Design: Funedikly</Type>
      </Grid>
      <Grid item columns={{ base: 1 }}><p className={classes.titleBy}>From Adam Sivins</p></Grid>
    </Grid>
  );
};
 