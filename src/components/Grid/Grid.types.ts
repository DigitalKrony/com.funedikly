/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

/**
 * @description
 */

export type Breakpoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full?: string
}

/**
 * @description Column count numbers
 */
export type Columns = 1 | 2 | 3 | 4 | 8 | 12;

/**
 * @description Container column breakpoint names
 */
export type ContainerColumns = {
  base?: Columns;
  xs?: Columns;
  sm?: Columns;
  md?: Columns;
  lg?: Columns;
  xl?: Columns;
};

/**
 * @description Object Spacings
 */
export type Spaces = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * @description Object spacing breakpoint names
 */
export type ObjectSpacing = {
  base?: Spaces;
  xs?: Spaces;
  sm?: Spaces;
  md?: Spaces;
  lg?: Spaces;
  xl?: Spaces;
};

/**
 * @description Object spacing breakpoint names
 */
export type ObjectHiding = {
  base?: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

/**
 * @description Direction of child elements.
 * @default row
 *  */
export type ItemDirections = 'row' | 'column';

/**
 * @description Alignment of child elements.
 * @default start
 */
export type WrapperAlignments = 'start' | 'center' | 'even' | 'end';

/**
 * @description Grid slot elements
 */
export type GridSlots = {
  root: Slot<'div'> | Slot<'article'>;
};

/**
 * @description This base TYPE deviates between either a parent wrapper and a child element.
 */
type GridTypeProps =
  | {
      /**
       * @description Set to `true`, it notes that the implemented component is a parent wrapper and changes the types associated.
       */
      container: true;

      /**
       * @description Set to `true`, it notes that the implemented component is a child item and changes the types associated.
       */
      item?: false;

      /**
       * @description "Mobile" first (Style rendering applies from base -> xs -> xl). Ignores `columnSpacing` and `rowSpacing` when added.
       */
      spacing?: ObjectSpacing;

      /**
       * @description "Mobile" first (Style rendering applies from base -> xs -> xl). Blocked by `spacing`.
       */
      columnSpacing?: ObjectSpacing;

      /**
       * @description "Mobile" first (Style rendering applies from base -> xs -> xl). Blocked by `spacing`.
       */
      rowSpacing?: ObjectSpacing;

      /**
       * @default row
       * @description Set direction of child items.
       */
      itemDirection?: ItemDirections;

      /**
       * @default start
       * @description Set directions aware vertical alignment of child items.
       */
      itemVerticalAlignment?: WrapperAlignments;

      /**
       * @default start
       * @description Set directions aware horizontal alignment of child items.
       */
      itemHorizontalAlignment?: WrapperAlignments;
    }
  | {
      container?: false;
      item: true;

      /**
       * @description "Mobile" first (Style rendering applies from base -> xs -> xl)
       */
      columns?: ContainerColumns;

      /**
       * @description "Mobile" first (Style rendering applies from base -> xs -> xl)
       */
      hide?: ObjectHiding;
    };

/**
 *  @description GridProps
 */
export type GridProps = ComponentProps<GridSlots> & GridTypeProps & {};

/**
 * @description State used in rendering  Grid
 */
export type GridState = ComponentState<GridSlots> & GridProps & GridTypeProps;

export type GridContextValue = {};

export type GridContextValues = {
  grid: GridContextValue;
};
