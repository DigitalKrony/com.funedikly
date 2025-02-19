/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles, mergeClasses } from '@griffel/react';
import { SlotClassNames } from '@fluentui/react-utilities';

import { tokens } from './../../utilities';

import type { TypeSlots, TypeState } from './Type.types';

export const TypeClassNames: SlotClassNames<TypeSlots> = {
  root: 'bap-type',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    padding: `${tokens.spacing_vert_md} ${tokens.spacing_horz_sm}`,
    display: 'inline-block',
  },
});

const typeStyles = makeStyles({
  hero_sm: {
    fontSize: tokens.hero_size_sm,
    fontWeight: tokens.font_weight_md,
    lineHeight: tokens.line_height_md,
  },
  hero_md: {
    fontSize: tokens.hero_size_md,
    fontWeight: tokens.font_weight_lg,
    lineHeight: tokens.line_height_md,
  },
  hero_lg: {
    fontSize: tokens.hero_size_lg,
    fontWeight: tokens.font_weight_lg,
    lineHeight: tokens.line_height_md,
  },
  heading_sm: {
    fontSize: tokens.heading_size_sm,
    fontWeight: tokens.font_weight_md,
    lineHeight: tokens.line_height_md,
  },
  heading_md: {
    fontSize: tokens.heading_size_md,
    fontWeight: tokens.font_weight_lg,
    lineHeight: tokens.line_height_md,
  },
  heading_lg: {
    fontSize: tokens.heading_size_lg,
    fontWeight: tokens.font_weight_xl,
    lineHeight: tokens.line_height_lg,
  },
  subheading_sm: {
    fontSize: tokens.subheading_sm,
    fontWeight: tokens.font_weight_md,
    lineHeight: tokens.line_height_md,
  },
  subheading_md: {
    fontSize: tokens.subheading_md,
    fontWeight: tokens.font_weight_lg,
    lineHeight: tokens.line_height_lg,
  },
  subheading_lg: {
    fontSize: tokens.subheading_lg,
    fontWeight: tokens.font_weight_lg,
    lineHeight: tokens.line_height_lg,
  },
  body_sm: {
    fontSize: tokens.body_sm,
    fontWeight: tokens.font_weight_sm,
    lineHeight: tokens.line_height_md,
  },
  body_md: {
    fontSize: tokens.body_md,
    fontWeight: tokens.font_weight_sm,
    lineHeight: tokens.line_height_md,
  },
  body_lg: {
    fontSize: tokens.body_lg,
    fontWeight: tokens.font_weight_lg,
    lineHeight: tokens.line_height_lg,
  },
  caption_sm: {
    fontSize: tokens.caption_size_sm,
    fontWeight: tokens.font_weight_sm,
    lineHeight: tokens.line_height_md,
  },
  caption_md: {
    fontSize: tokens.caption_size_,
    fontWeight: tokens.font_weight_sm,
    lineHeight: tokens.line_height_md,
  },
  caption_lg: {
    fontSize: tokens.caption_size_,
    fontWeight: tokens.font_weight_sm,
    lineHeight: tokens.line_height_lg,
  },
});

/**
 * Apply styling to the Type slots based on the props
 */
export const useTypeStyles = (props: TypeState): TypeState => {
  const styles = useStyles();
  const types = typeStyles();
  const {type, level} = props;
  const typeName = (types as any)[`${type}_${level}`]
  let typeClassName;

  if (!!typeName) {
    typeClassName = typeName;
  }

  props.root.className = mergeClasses(TypeClassNames.root, typeClassName, styles.root, props.className);

  return props;
};
