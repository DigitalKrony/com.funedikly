/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { SlotClassNames } from '@fluentui/react-utilities';

import { tokens, breakpointValues } from './../../utilities';
import type { GridSlots, GridState, Breakpoints } from './Grid.types';

export const bottomUpBreakPoints: Breakpoints = {
  xs: `@media screen and (min-width: ${breakpointValues.breakpoints_xs})`,
  sm: `@media screen and (min-width: ${breakpointValues.breakpoints_sm})`,
  md: `@media screen and (min-width: ${breakpointValues.breakpoints_md})`,
  lg: `@media screen and (min-width: ${breakpointValues.breakpoints_lg})`,
  xl: `@media screen and (min-width: ${breakpointValues.breakpoints_xl})`,
};

export const topDownBreakPoints: Breakpoints = {
  xs: `@media screen and (max-width: ${breakpointValues.breakpoints_xs})`,
  sm: `@media screen and (max-width: ${breakpointValues.breakpoints_sm})`,
  md: `@media screen and (max-width: ${breakpointValues.breakpoints_md})`,
  lg: `@media screen and (max-width: ${breakpointValues.breakpoints_lg})`,
  xl: `@media screen and (max-width: ${breakpointValues.breakpoints_xl})`,
};

export const pointBreakPoints: Breakpoints = {
  xs: `@media screen and (min-width: 1px) and (max-width: ${breakpointValues.breakpoints_xs})`,
  sm: `@media screen and (min-width: calc(${breakpointValues.breakpoints_xs} + 1px)) and (max-width: ${breakpointValues.breakpoints_sm})`,
  md: `@media screen and (min-width: calc(${breakpointValues.breakpoints_sm} + 1px)) and (max-width: ${breakpointValues.breakpoints_md})`,
  lg: `@media screen and (min-width: calc(${breakpointValues.breakpoints_md} + 1px)) and (max-width: ${breakpointValues.breakpoints_lg})`,
  xl: `@media screen and (min-width: calc(${breakpointValues.breakpoints_lg} + 1px)) and (max-width: ${breakpointValues.breakpoints_xl})`,
  full: `@media screen and (max-width: calc(${breakpointValues.breakpoints_xl} + 1px))`,
};

export const gridClassNames: SlotClassNames<GridSlots> = {
  root: 'fn-grid',
};

/**
 * @description Styles for the root slot
 */
const useStyles = makeStyles({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    '--column-gap': '0px',
  },
  item: {
    flexGrow: '0',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  itemAutoGrow: {
    flexGrow: '1',
  },
});

const useBaseBottomUpBreakPoints = makeStyles({
  widths_1: {
    width: 'calc(100% - var(--column-gap))',
  },
  widths_2: {
    width: 'calc(100% / 2 - var(--column-gap))',
  },
  widths_3: {
    width: 'calc(100% / 3 - var(--column-gap))',
  },
  widths_4: {
    width: 'calc(100% / 4 - var(--column-gap))',
  },
  widths_8: {
    width: 'calc(100% / 8 - var(--column-gap))',
  },
  widths_12: {
    width: 'calc(100% / 12 - var(--column-gap))',
  },
});

const useXSBottomUpBreakPoints = makeStyles({
  widths_1: {
    [bottomUpBreakPoints.xs]: {
      width: 'calc(100% - var(--column-gap))',
    },
  },
  widths_2: {
    [bottomUpBreakPoints.xs]: {
      width: 'calc(100% / 2 - var(--column-gap))',
    },
  },
  widths_3: {
    [bottomUpBreakPoints.xs]: {
      width: 'calc(100% / 3 - var(--column-gap))',
    },
  },
  widths_4: {
    [bottomUpBreakPoints.xs]: {
      width: 'calc(100% / 4 - var(--column-gap))',
    },
  },
  widths_8: {
    [bottomUpBreakPoints.xs]: {
      width: 'calc(100% / 8 - var(--column-gap))',
    },
  },
  widths_12: {
    [bottomUpBreakPoints.xs]: {
      width: 'calc(100% / 12 - var(--column-gap))',
    },
  },
});

const useSMBottomUpBreakPoints = makeStyles({
  widths_1: {
    [bottomUpBreakPoints.sm]: {
      width: 'calc(100% - var(--column-gap))',
    },
  },
  widths_2: {
    [bottomUpBreakPoints.sm]: {
      width: 'calc(100% / 2 - var(--column-gap))',
    },
  },
  widths_3: {
    [bottomUpBreakPoints.sm]: {
      width: 'calc(100% / 3 - var(--column-gap))',
    },
  },
  widths_4: {
    [bottomUpBreakPoints.sm]: {
      width: 'calc(100% / 4 - var(--column-gap))',
    },
  },
  widths_8: {
    [bottomUpBreakPoints.sm]: {
      width: 'calc(100% / 8 - var(--column-gap))',
    },
  },
  widths_12: {
    [bottomUpBreakPoints.sm]: {
      width: 'calc(100% / 12 - var(--column-gap))',
    },
  },
});

const useMDBottomUpBreakPoints = makeStyles({
  widths_1: {
    [bottomUpBreakPoints.md]: {
      width: 'calc(100% - var(--column-gap))',
    },
  },
  widths_2: {
    [bottomUpBreakPoints.md]: {
      width: 'calc(100% / 2 - var(--column-gap))',
    },
  },
  widths_3: {
    [bottomUpBreakPoints.md]: {
      width: 'calc(100% / 3 - var(--column-gap))',
    },
  },
  widths_4: {
    [bottomUpBreakPoints.md]: {
      width: 'calc(100% / 4 - var(--column-gap))',
    },
  },
  widths_8: {
    [bottomUpBreakPoints.md]: {
      width: 'calc(100% / 8 - var(--column-gap))',
    },
  },
  widths_12: {
    [bottomUpBreakPoints.md]: {
      width: 'calc(100% / 12 - var(--column-gap))',
    },
  },
});

const useLGBottomUpBreakPoints = makeStyles({
  widths_1: {
    [bottomUpBreakPoints.lg]: {
      width: 'calc(100% - var(--column-gap))',
    },
  },
  widths_2: {
    [bottomUpBreakPoints.lg]: {
      width: 'calc(100% / 2 - var(--column-gap))',
    },
  },
  widths_3: {
    [bottomUpBreakPoints.lg]: {
      width: 'calc(100% / 3 - var(--column-gap))',
    },
  },
  widths_4: {
    [bottomUpBreakPoints.lg]: {
      width: 'calc(100% / 4 - var(--column-gap))',
    },
  },
  widths_8: {
    [bottomUpBreakPoints.lg]: {
      width: 'calc(100% / 8 - var(--column-gap))',
    },
  },
  widths_12: {
    [bottomUpBreakPoints.lg]: {
      width: 'calc(100% / 12 - var(--column-gap))',
    },
  },
});

const useXLBottomUpBreakPoints = makeStyles({
  widths_1: {
    [bottomUpBreakPoints.xl]: {
      width: 'calc(100% - var(--column-gap))',
    },
  },
  widths_2: {
    [bottomUpBreakPoints.xl]: {
      width: 'calc(100% / 2 - var(--column-gap))',
    },
  },
  widths_3: {
    [bottomUpBreakPoints.xl]: {
      width: 'calc(100% / 3 - var(--column-gap))',
    },
  },
  widths_4: {
    [bottomUpBreakPoints.xl]: {
      width: 'calc(100% / 4 - var(--column-gap))',
    },
  },
  widths_8: {
    [bottomUpBreakPoints.xl]: {
      width: 'calc(100% / 8 - var(--column-gap))',
    },
  },
  widths_12: {
    [bottomUpBreakPoints.xl]: {
      width: 'calc(100% / 12 - var(--column-gap))',
    },
  },
});

/**
 * @description Styles for the item widths
 */
const useBottomUpBreakPoints = () => {
  return {
    base: useBaseBottomUpBreakPoints(),
    xs: useXSBottomUpBreakPoints(),
    sm: useSMBottomUpBreakPoints(),
    md: useMDBottomUpBreakPoints(),
    lg: useLGBottomUpBreakPoints(),
    xl: useXLBottomUpBreakPoints(),
  };
};

const useBaseHorizontalSpacing = makeStyles({
  horz_none: {
    '--column-gap': tokens.spacing_horz_none,
    columnGap: tokens.spacing_horz_none,
    marginInlineStart: tokens.spacing_horz_none,
  },
  horz_xxs: {
    '--column-gap': tokens.spacing_horz_xxs,
    columnGap: tokens.spacing_horz_xxs,
    marginInlineStart: tokens.spacing_horz_xxs,
  },
  horz_xs: {
    '--column-gap': tokens.spacing_horz_xs,
    columnGap: tokens.spacing_horz_xs,
    marginInlineStart: tokens.spacing_horz_xs,
  },
  horz_sm: {
    '--column-gap': tokens.spacing_horz_sm,
    columnGap: tokens.spacing_horz_sm,
    marginInlineStart: tokens.spacing_horz_sm,
  },
  horz_md: {
    '--column-gap': tokens.spacing_horz_md,
    columnGap: tokens.spacing_horz_md,
    marginInlineStart: tokens.spacing_horz_md,
  },
  horz_lg: {
    '--column-gap': tokens.spacing_horz_lg,
    columnGap: tokens.spacing_horz_lg,
    marginInlineStart: tokens.spacing_horz_lg,
  },
  horz_xl: {
    '--column-gap': tokens.spacing_horz_xl,
    columnGap: tokens.spacing_horz_xl,
    marginInlineStart: tokens.spacing_horz_xl,
  },
  horz_xxl: {
    '--column-gap': tokens.spacing_horz_xxl,
    columnGap: tokens.spacing_horz_xxl,
    marginInlineStart: tokens.spacing_horz_xxl,
  },
});

const useXSHorizontalSpacing = makeStyles({
  horz_none: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_none,
      columnGap: tokens.spacing_horz_none,
      marginInlineStart: tokens.spacing_horz_none,
    },
  },
  horz_xxs: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_xxs,
      columnGap: tokens.spacing_horz_xxs,
      marginInlineStart: tokens.spacing_horz_xxs,
    },
  },
  horz_xs: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_xs,
      columnGap: tokens.spacing_horz_xs,
      marginInlineStart: tokens.spacing_horz_xs,
    },
  },
  horz_sm: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_sm,
      columnGap: tokens.spacing_horz_sm,
      marginInlineStart: tokens.spacing_horz_sm,
    },
  },
  horz_md: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_md,
      columnGap: tokens.spacing_horz_md,
      marginInlineStart: tokens.spacing_horz_md,
    },
  },
  horz_lg: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_lg,
      columnGap: tokens.spacing_horz_lg,
      marginInlineStart: tokens.spacing_horz_lg,
    },
  },
  horz_xl: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_xl,
      columnGap: tokens.spacing_horz_xl,
      marginInlineStart: tokens.spacing_horz_xl,
    },
  },
  horz_xxl: {
    [bottomUpBreakPoints.xs]: {
      '--column-gap': tokens.spacing_horz_xxl,
      columnGap: tokens.spacing_horz_xxl,
      marginInlineStart: tokens.spacing_horz_xxl,
    },
  },
});

const useSMHorizontalSpacing = makeStyles({
  horz_none: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_none,
      columnGap: tokens.spacing_horz_none,
      marginInlineStart: tokens.spacing_horz_none,
    },
  },
  horz_xxs: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_xxs,
      columnGap: tokens.spacing_horz_xxs,
      marginInlineStart: tokens.spacing_horz_xxs,
    },
  },
  horz_xs: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_xs,
      columnGap: tokens.spacing_horz_xs,
      marginInlineStart: tokens.spacing_horz_xs,
    },
  },
  horz_sm: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_sm,
      columnGap: tokens.spacing_horz_sm,
      marginInlineStart: tokens.spacing_horz_sm,
    },
  },
  horz_md: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_md,
      columnGap: tokens.spacing_horz_md,
      marginInlineStart: tokens.spacing_horz_md,
    },
  },
  horz_lg: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_lg,
      columnGap: tokens.spacing_horz_lg,
      marginInlineStart: tokens.spacing_horz_lg,
    },
  },
  horz_xl: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_xl,
      columnGap: tokens.spacing_horz_xl,
      marginInlineStart: tokens.spacing_horz_xl,
    },
  },
  horz_xxl: {
    [bottomUpBreakPoints.sm]: {
      '--column-gap': tokens.spacing_horz_xxl,
      columnGap: tokens.spacing_horz_xxl,
      marginInlineStart: tokens.spacing_horz_xxl,
    },
  },
});

const useMDHorizontalSpacing = makeStyles({
  horz_none: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_none,
      columnGap: tokens.spacing_horz_none,
      marginInlineStart: tokens.spacing_horz_none,
    },
  },
  horz_xxs: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_xxs,
      columnGap: tokens.spacing_horz_xxs,
      marginInlineStart: tokens.spacing_horz_xxs,
    },
  },
  horz_xs: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_xs,
      columnGap: tokens.spacing_horz_xs,
      marginInlineStart: tokens.spacing_horz_xs,
    },
  },
  horz_sm: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_sm,
      columnGap: tokens.spacing_horz_sm,
      marginInlineStart: tokens.spacing_horz_sm,
    },
  },
  horz_md: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_md,
      columnGap: tokens.spacing_horz_md,
      marginInlineStart: tokens.spacing_horz_md,
    },
  },
  horz_lg: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_lg,
      columnGap: tokens.spacing_horz_lg,
      marginInlineStart: tokens.spacing_horz_lg,
    },
  },
  horz_xl: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_xl,
      columnGap: tokens.spacing_horz_xl,
      marginInlineStart: tokens.spacing_horz_xl,
    },
  },
  horz_xxl: {
    [bottomUpBreakPoints.md]: {
      '--column-gap': tokens.spacing_horz_xxl,
      columnGap: tokens.spacing_horz_xxl,
      marginInlineStart: tokens.spacing_horz_xxl,
    },
  },
});

const useLGHorizontalSpacing = makeStyles({
  horz_none: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_none,
      columnGap: tokens.spacing_horz_none,
      marginInlineStart: tokens.spacing_horz_none,
    },
  },
  horz_xxs: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_xxs,
      columnGap: tokens.spacing_horz_xxs,
      marginInlineStart: tokens.spacing_horz_xxs,
    },
  },
  horz_xs: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_xs,
      columnGap: tokens.spacing_horz_xs,
      marginInlineStart: tokens.spacing_horz_xs,
    },
  },
  horz_sm: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_sm,
      columnGap: tokens.spacing_horz_sm,
      marginInlineStart: tokens.spacing_horz_sm,
    },
  },
  horz_md: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_md,
      columnGap: tokens.spacing_horz_md,
      marginInlineStart: tokens.spacing_horz_md,
    },
  },
  horz_lg: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_lg,
      columnGap: tokens.spacing_horz_lg,
      marginInlineStart: tokens.spacing_horz_lg,
    },
  },
  horz_xl: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_xl,
      columnGap: tokens.spacing_horz_xl,
      marginInlineStart: tokens.spacing_horz_xl,
    },
  },
  horz_xxl: {
    [bottomUpBreakPoints.lg]: {
      '--column-gap': tokens.spacing_horz_xxl,
      columnGap: tokens.spacing_horz_xxl,
      marginInlineStart: tokens.spacing_horz_xxl,
    },
  },
});

const useXLHorizontalSpacing = makeStyles({
  horz_none: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_none,
      columnGap: tokens.spacing_horz_none,
      marginInlineStart: tokens.spacing_horz_none,
    },
  },
  horz_xxs: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_xxs,
      columnGap: tokens.spacing_horz_xxs,
      marginInlineStart: tokens.spacing_horz_xxs,
    },
  },
  horz_xs: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_xs,
      columnGap: tokens.spacing_horz_xs,
      marginInlineStart: tokens.spacing_horz_xs,
    },
  },
  horz_sm: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_sm,
      columnGap: tokens.spacing_horz_sm,
      marginInlineStart: tokens.spacing_horz_sm,
    },
  },
  horz_md: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_md,
      columnGap: tokens.spacing_horz_md,
      marginInlineStart: tokens.spacing_horz_md,
    },
  },
  horz_lg: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_lg,
      columnGap: tokens.spacing_horz_lg,
      marginInlineStart: tokens.spacing_horz_lg,
    },
  },
  horz_xl: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_xl,
      columnGap: tokens.spacing_horz_xl,
      marginInlineStart: tokens.spacing_horz_xl,
    },
  },
  horz_xxl: {
    [bottomUpBreakPoints.xl]: {
      '--column-gap': tokens.spacing_horz_xxl,
      columnGap: tokens.spacing_horz_xxl,
      marginInlineStart: tokens.spacing_horz_xxl,
    },
  },
});

/**
 * Styles for the container flex horizontal/column gaps
 */
/**
 *
 * @description Please note that 'none' values are set with '0px' strings. A bug was found when setting these with the FluentUI Tokens where the value was just '0'
 */
const useHorizontalSpacing = () => {
  return {
    base: useBaseHorizontalSpacing(),
    xs: useXSHorizontalSpacing(),
    sm: useSMHorizontalSpacing(),
    md: useMDHorizontalSpacing(),
    lg: useLGHorizontalSpacing(),
    xl: useXLHorizontalSpacing(),
  };
};

const useBaseVerticalSpacing = makeStyles({
  vert_none: {
    rowGap: tokens.spacing_vert_none,
    marginBlockStart: tokens.spacing_vert_none,
  },
  vert_xxs: {
    rowGap: tokens.spacing_vert_xxs,
    marginBlockStart: tokens.spacing_vert_xxs,
  },
  vert_xs: {
    rowGap: tokens.spacing_vert_xs,
    marginBlockStart: tokens.spacing_vert_xs,
  },
  vert_sm: {
    rowGap: tokens.spacing_vert_sm,
    marginBlockStart: tokens.spacing_vert_sm,
  },
  vert_md: {
    rowGap: tokens.spacing_vert_md,
    marginBlockStart: tokens.spacing_vert_md,
  },
  vert_lg: {
    rowGap: tokens.spacing_vert_lg,
    marginBlockStart: tokens.spacing_vert_lg,
  },
  vert_xl: {
    rowGap: tokens.spacing_vert_xl,
    marginBlockStart: tokens.spacing_vert_xl,
  },
  vert_xxl: {
    rowGap: tokens.spacing_vert_xxl,
    marginBlockStart: tokens.spacing_vert_xxl,
  },
});

const useXSVerticalSpacing = makeStyles({
  vert_none: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_none,
      marginBlockStart: tokens.spacing_vert_none,
    },
  },
  vert_xxs: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_xxs,
      marginBlockStart: tokens.spacing_vert_xxs,
    },
  },
  vert_xs: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_xs,
      marginBlockStart: tokens.spacing_vert_xs,
    },
  },
  vert_sm: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_sm,
      marginBlockStart: tokens.spacing_vert_sm,
    },
  },
  vert_md: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_md,
      marginBlockStart: tokens.spacing_vert_md,
    },
  },
  vert_lg: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_lg,
      marginBlockStart: tokens.spacing_vert_lg,
    },
  },
  vert_xl: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_xl,
      marginBlockStart: tokens.spacing_vert_xl,
    },
  },
  vert_xxl: {
    [bottomUpBreakPoints.xs]: {
      rowGap: tokens.spacing_vert_xxl,
      marginBlockStart: tokens.spacing_vert_xxl,
    },
  },
});

const useSMVerticalSpacing = makeStyles({
  vert_none: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_none,
      marginBlockStart: tokens.spacing_vert_none,
    },
  },
  vert_xxs: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_xxs,
      marginBlockStart: tokens.spacing_vert_xxs,
    },
  },
  vert_xs: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_xs,
      marginBlockStart: tokens.spacing_vert_xs,
    },
  },
  vert_sm: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_sm,
      marginBlockStart: tokens.spacing_vert_sm,
    },
  },
  vert_md: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_md,
      marginBlockStart: tokens.spacing_vert_md,
    },
  },
  vert_lg: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_lg,
      marginBlockStart: tokens.spacing_vert_lg,
    },
  },
  vert_xl: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_xl,
      marginBlockStart: tokens.spacing_vert_xl,
    },
  },
  vert_xxl: {
    [bottomUpBreakPoints.sm]: {
      rowGap: tokens.spacing_vert_xxl,
      marginBlockStart: tokens.spacing_vert_xxl,
    },
  },
});

const useMDVerticalSpacing = makeStyles({
  vert_none: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_none,
      marginBlockStart: tokens.spacing_vert_none,
    },
  },
  vert_xxs: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_xxs,
      marginBlockStart: tokens.spacing_vert_xxs,
    },
  },
  vert_xs: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_xs,
      marginBlockStart: tokens.spacing_vert_xs,
    },
  },
  vert_sm: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_sm,
      marginBlockStart: tokens.spacing_vert_sm,
    },
  },
  vert_md: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_md,
      marginBlockStart: tokens.spacing_vert_md,
    },
  },
  vert_lg: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_lg,
      marginBlockStart: tokens.spacing_vert_lg,
    },
  },
  vert_xl: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_xl,
      marginBlockStart: tokens.spacing_vert_xl,
    },
  },
  vert_xxl: {
    [bottomUpBreakPoints.md]: {
      rowGap: tokens.spacing_vert_xxl,
      marginBlockStart: tokens.spacing_vert_xxl,
    },
  },
});

const useLGVerticalSpacing = makeStyles({
  vert_none: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_none,
      marginBlockStart: tokens.spacing_vert_none,
    },
  },
  vert_xxs: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_xxs,
      marginBlockStart: tokens.spacing_vert_xxs,
    },
  },
  vert_xs: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_xs,
      marginBlockStart: tokens.spacing_vert_xs,
    },
  },
  vert_sm: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_sm,
      marginBlockStart: tokens.spacing_vert_sm,
    },
  },
  vert_md: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_md,
      marginBlockStart: tokens.spacing_vert_md,
    },
  },
  vert_lg: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_lg,
      marginBlockStart: tokens.spacing_vert_lg,
    },
  },
  vert_xl: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_xl,
      marginBlockStart: tokens.spacing_vert_xl,
    },
  },
  vert_xxl: {
    [bottomUpBreakPoints.lg]: {
      rowGap: tokens.spacing_vert_xxl,
      marginBlockStart: tokens.spacing_vert_xxl,
    },
  },
});

const useXLVerticalSpacing = makeStyles({
  vert_none: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_none,
      marginBlockStart: tokens.spacing_vert_none,
    },
  },
  vert_xxs: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_xxs,
      marginBlockStart: tokens.spacing_vert_xxs,
    },
  },
  vert_xs: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_xs,
      marginBlockStart: tokens.spacing_vert_xs,
    },
  },
  vert_sm: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_sm,
      marginBlockStart: tokens.spacing_vert_sm,
    },
  },
  vert_md: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_md,
      marginBlockStart: tokens.spacing_vert_md,
    },
  },
  vert_lg: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_lg,
      marginBlockStart: tokens.spacing_vert_lg,
    },
  },
  vert_xl: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_xl,
      marginBlockStart: tokens.spacing_vert_xl,
    },
  },
  vert_xxl: {
    [bottomUpBreakPoints.xl]: {
      rowGap: tokens.spacing_vert_xxl,
      marginBlockStart: tokens.spacing_vert_xxl,
    },
  },
});

/**
 * @description Styles for the container flex vertical/row gaps
 */
const useVerticalSpacing = () => {
  return {
    base: useBaseVerticalSpacing(),
    xs: useXSVerticalSpacing(),
    sm: useSMVerticalSpacing(),
    md: useMDVerticalSpacing(),
    lg: useLGVerticalSpacing(),
    xl: useXLVerticalSpacing(),
  };
};

/**
 * @description Styles for hidden elements
 */
const useHiddenElements = makeStyles({
  base: {
    '@media screen and (max-width: 0px)': {
      display: 'none !important',
    },
  },
  xs: {
    [bottomUpBreakPoints.xs]: {
      display: 'none !important',
    },
  },
  sm: {
    [bottomUpBreakPoints.sm]: {
      display: 'none !important',
    },
  },
  md: {
    [bottomUpBreakPoints.md]: {
      display: 'none !important',
    },
  },
  lg: {
    [bottomUpBreakPoints.lg]: {
      display: 'none !important',
    },
  },
  xl: {
    [bottomUpBreakPoints.xl]: {
      display: 'none !important',
    },
  },
});

/**
 * @param state
 * @returns Item alinement style that is direction aware
 */
const useAlignmentStyles = makeStyles({
  dir_row: {
    flexDirection: 'row',
  },
  dir_col: {
    flexDirection: 'column',
  },
  just_start: {
    justifyContent: 'flex-start',
  },
  just_center: {
    justifyContent: 'center',
  },
  just_even: {
    justifyContent: 'space-evenly',
  },
  just_end: {
    justifyContent: 'flex-end',
  },
  align_start: {
    alignContent: 'start',
  },
  align_center: {
    alignContent: 'center',
  },
  align_even: {
    alignContent: 'space-evenly',
  },
  align_end: {
    alignContent: 'end',
  },
});

/**
 * Apply styling to the  Grid slots based on the state
 */
export const useGridStyles = (state: GridState): GridState => {
  const { container, item } = state;
  const styles = useStyles();
  const b = useBottomUpBreakPoints();
  const h = useHorizontalSpacing();
  const v = useVerticalSpacing();
  const n = useHiddenElements();
  const a = useAlignmentStyles();
  const objectStyleArray = [styles.root];

  if (container) {
    const {
      columnSpacing,
      rowSpacing,
      spacing,
      itemDirection,
      itemVerticalAlignment,
      itemHorizontalAlignment,
    } = state;
    // Styles Grid Container/Wrapper
    objectStyleArray.push(styles.container);

    if (spacing !== undefined) {
      if (!!spacing.base) {
        objectStyleArray.push(h.base[`horz_${spacing.base}`]);
        objectStyleArray.push(v.base[`vert_${spacing.base}`]);
      }

      if (!!spacing.xs) {
        objectStyleArray.push(h.xs[`horz_${spacing.xs}`]);
        objectStyleArray.push(v.xs[`vert_${spacing.xs}`]);
      }

      if (!!spacing.sm) {
        objectStyleArray.push(h.sm[`horz_${spacing.sm}`]);
        objectStyleArray.push(v.sm[`vert_${spacing.sm}`]);
      }

      if (!!spacing.md) {
        objectStyleArray.push(h.md[`horz_${spacing.md}`]);
        objectStyleArray.push(v.md[`vert_${spacing.md}`]);
      }

      if (!!spacing.lg) {
        objectStyleArray.push(h.lg[`horz_${spacing.lg}`]);
        objectStyleArray.push(v.lg[`vert_${spacing.lg}`]);
      }

      if (!!spacing.xl) {
        objectStyleArray.push(h.xl[`horz_${spacing.xl}`]);
        objectStyleArray.push(v.xl[`vert_${spacing.xl}`]);
      }
    }

    if (!!columnSpacing) {
      if (!!columnSpacing.base) {
        objectStyleArray.push(h.base[`horz_${columnSpacing.base}`]);
      }

      if (!!columnSpacing.xs) {
        objectStyleArray.push(h.xs[`horz_${columnSpacing.xs}`]);
      }

      if (!!columnSpacing.sm) {
        objectStyleArray.push(h.sm[`horz_${columnSpacing.sm}`]);
      }

      if (!!columnSpacing.md) {
        objectStyleArray.push(h.md[`horz_${columnSpacing.md}`]);
      }

      if (!!columnSpacing.lg) {
        objectStyleArray.push(h.lg[`horz_${columnSpacing.lg}`]);
      }

      if (!!columnSpacing.xl) {
        objectStyleArray.push(h.xl[`horz_${columnSpacing.xl}`]);
      }
    }

    if (!!rowSpacing) {
      if (!!rowSpacing.base) {
        objectStyleArray.push(v.base[`vert_${rowSpacing.base}`]);
      }

      if (!!rowSpacing.xs) {
        objectStyleArray.push(v.xs[`vert_${rowSpacing.xs}`]);
      }

      if (!!rowSpacing.sm) {
        objectStyleArray.push(v.sm[`vert_${rowSpacing.sm}`]);
      }

      if (!!rowSpacing.md) {
        objectStyleArray.push(v.md[`vert_${rowSpacing.md}`]);
      }

      if (!!rowSpacing.lg) {
        objectStyleArray.push(v.lg[`vert_${rowSpacing.lg}`]);
      }

      if (!!rowSpacing.xl) {
        objectStyleArray.push(v.xl[`vert_${rowSpacing.xl}`]);
      }
    }

    if (itemDirection === 'row' || itemDirection === undefined) {
      objectStyleArray.push(a.dir_row);
      switch (itemHorizontalAlignment) {
        case 'center':
          objectStyleArray.push(a.align_center);
          break;
        case 'even':
          objectStyleArray.push(a.align_even);
          break;
        case 'end':
          objectStyleArray.push(a.align_end);
          break;
        case 'start':
        default:
          objectStyleArray.push(a.align_start);
          break;
      }
      switch (itemVerticalAlignment) {
        case 'center':
          objectStyleArray.push(a.just_center);
          break;
        case 'even':
          objectStyleArray.push(a.just_even);
          break;
        case 'end':
          objectStyleArray.push(a.just_end);
          break;
        case 'start':
        default:
          objectStyleArray.push(a.just_start);
          break;
      }
    } else if (itemDirection === 'column') {
      switch (itemVerticalAlignment) {
        case 'center':
          objectStyleArray.push(a.align_center);
          break;
        case 'even':
          objectStyleArray.push(a.align_even);
          break;
        case 'end':
          objectStyleArray.push(a.align_end);
          break;
        case 'start':
        default:
          objectStyleArray.push(a.align_start);
          break;
      }
      switch (itemHorizontalAlignment) {
        case 'center':
          objectStyleArray.push(a.just_center);
          break;
        case 'even':
          objectStyleArray.push(a.just_even);
          break;
        case 'end':
          objectStyleArray.push(a.just_end);
          break;
        case 'start':
        default:
          objectStyleArray.push(a.just_start);
          break;
      }
      objectStyleArray.push(a.dir_col);
    }
  }

  if (item) {
    const { columns, hide } = state;
    // Styles Grid Items
    objectStyleArray.push(styles.item);

    if (columns === undefined) {
      //
    } else {
      if (!!columns.base) {
        objectStyleArray.push(b.base[`widths_${columns.base}`]);
      }

      if (!!columns.xs) {
        objectStyleArray.push(b.xs[`widths_${columns.xs}`]);
      }

      if (!!columns.sm) {
        objectStyleArray.push(b.sm[`widths_${columns.sm}`]);
      }

      if (!!columns.md) {
        objectStyleArray.push(b.md[`widths_${columns.md}`]);
      }

      if (!!columns.lg) {
        objectStyleArray.push(b.lg[`widths_${columns.lg}`]);
      }

      if (!!columns.xl) {
        objectStyleArray.push(b.xl[`widths_${columns.xl}`]);
      }
    }

    if (!!hide) {
      if (!!hide.base) {
        objectStyleArray.push(n.base);
      }

      if (!!hide.xs) {
        objectStyleArray.push(n.xs);
      }

      if (!!hide.sm) {
        objectStyleArray.push(n.sm);
      }

      if (!!hide.md) {
        objectStyleArray.push(n.md);
      }

      if (!!hide.lg) {
        objectStyleArray.push(n.lg);
      }

      if (!!hide.xl) {
        objectStyleArray.push(n.xl);
      }
    }
  }

  const theClasses = mergeClasses(...objectStyleArray, gridClassNames.root, state.root.className);

  state.root.className = theClasses;

  return state;
};
