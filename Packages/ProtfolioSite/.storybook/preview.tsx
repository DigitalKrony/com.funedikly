/** @type { import('@storybook/react').Preview } */

import React from 'react';
import { StoryFn } from '@storybook/react';

import { ThemeProvider } from './../src/providers/ThemeProvider';

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ["Pages", "Wrapper", "Controls"],
      locales: 'en-US',
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export const decorators = [
  (LoadedStory: StoryFn, args: any) => {
    return (
      <ThemeProvider>
        <LoadedStory {...args} />
      </ThemeProvider>
    );
  }
]
