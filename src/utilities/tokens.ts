/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

const breakpoint_values = {
  breakpoints_xs: '320px',
  breakpoints_sm: '430px',
  breakpoints_md: '768px',
  breakpoints_lg: '1024px',
  breakpoints_xl: '1200px',
}

const type_size_values = {
  caption_size_sm: '6px',
  caption_size_md: '7px',
  caption_size_lg: '8px',
  text_size_xs: '10px',
  text_size_sm: '12px',
  text_size_md: '14px',
  text_size_lg: '16px',
  text_size_xl: '18px',
  subheading_size_sm: '16px',
  subheading_size_md: '20px',
  subheading_size_lg: '28px',
  heading_size_xs: '20px',
  heading_size_sm: '24px',
  heading_size_md: '28px',
  heading_size_lg: '32px',
  heading_size_xl: '36px',
  hero_size_sm: '60px',
  hero_size_md: '70px',
  hero_size_lg: '80px',
}

const line_height_values = {
  line_height_xs: '.8',
  line_height_sm: '.9',
  line_height_md: '1',
  line_height_lg: '1.2',
  line_height_xl: '1.5',
}

const font_weight_values = {
  font_weight_xs: '100',
  font_weight_sm: '300',
  font_weight_md: '400',
  font_weight_lg: '600',
  font_weight_xl: '800',
}

const spacing = {
  spacing_horz_none: '0px',
  spacing_horz_xxs: '1px',
  spacing_horz_xs: '1px',
  spacing_horz_sm: '2px',
  spacing_horz_md: '4px',
  spacing_horz_lg: '8px',
  spacing_horz_xl: '16px',
  spacing_horz_xxl: '16px',
  
  spacing_vert_none: '0px',
  spacing_vert_xxs: '1px',
  spacing_vert_xs: '1px',
  spacing_vert_sm: '2px',
  spacing_vert_md: '4px',
  spacing_vert_lg: '8px',
  spacing_vert_xl: '16px',
  spacing_vert_xxl: '16px',
  
  spacing_none: '0px',
  spacing_xxs: '1px',
  spacing_xs: '1px',
  spacing_sm: '2px',
  spacing_md: '4px',
  spacing_lg: '8px',
  spacing_xl: '16px',
  spacing_xxl: '16px',
}

export const tokenValues = {
  ...type_size_values,
  ...line_height_values,
  ...font_weight_values,
  ...breakpoint_values,
  ...spacing,
};

export const buildTokens = () => {
  const newTokens: any = {};
  for (const [key, value] of Object.entries(tokenValues)) {
    newTokens[key] = `var(--${key})`;
  }
  return newTokens;
};

export const breakpointValues = breakpoint_values;
export const tokens = buildTokens();
