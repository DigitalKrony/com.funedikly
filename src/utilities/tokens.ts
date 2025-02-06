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
  text_size_xs: '10px',
  text_size_sm: '12px',
  text_size_md: '14px',
  text_size_lg: '16px',
  text_size_xl: '18px',
  heading_size_xs: '20px',
  heading_size_sm: '24px',
  heading_size_md: '28px',
  heading_size_lg: '32px',
  heading_size_xl: '36px',
  hero_size_s: '60px',
  hero_size_m: '70px',
  hero_size_l: '80px',
}

export const tokenValues = {
  ...type_size_values,
  ...breakpoint_values
};

export const buildTokens = () => {
  const newTokens: any = {};
  for (const [key, value] of Object.entries(tokenValues)) {
    newTokens[key] = `var(--${key})`;
  }
  return newTokens;
};

export const tokens = buildTokens();
