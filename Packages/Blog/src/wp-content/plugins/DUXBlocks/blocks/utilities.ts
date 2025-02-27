
import { RawHTML } from '@wordpress/element';

const colors: any = {
  "primary": "#0067b8",
  "secondary": "#000",
  "light": "#fff",
  "dark": "#000",

  // "success": "#198754",
  // "info": "#0dcaf0",
  // "warning": "#ffc107",
  // "danger": "#dc3545",

  "gray-100": "#f2f2f2",
  "gray-200": "#e6e6e6",
  "gray-300": "#d2d2d2",
  "gray-400": "#a2a2a2",
  "gray-475": "#858585",
  "gray-500": "#757575",
  "gray-600": "#505050",
  "gray-700": "#404040",
  "gray-800": "#2f2f2f",
  "gray-900": "#171717",

  "white": "white",
  "black": "black",
  "orange": "#d83b01",
  "green": "#107c10",
  "purple": "#8661c5",
  "yellow": "#ffb900",
  "teal": "#008575",

  "dark-blue": "#243a5e",
  "dark-orange": "#6b2929",
  "dark-green": "#054b16",
  "dark-purple": "#3b2e58",
  "dark-yellow": "#6a4b16",
  "dark-teal": "#274b47",

  "light-blue": "#50e6ff",
  "light-orange": "#ff9349",
  "light-green": "#9bf00b",
  "light-purple": "#d59dff",
  "light-yellow": "#fef000",
  "light-teal": "#30e5d0",

  "alt-blue": "#3aa0fa",
  "alt-orange": "#f7894a",
  "alt-green": "#5dc21e"
}

export const colorArray = ((): any[] => {
  const theArray: any[] = [];

  for (const color in colors) {
    theArray.push({
      name: color,
      color: colors[color]
    });
  }
  return theArray;
})();

export const blockOptions = {
  HeadingSizes: [
    {
      value: 'display-1',
      label: 'Display 1'
    },
    {
      value: 'display-2',
      label: 'Display 2'
    },
    {
      value: 'display-3',
      label: 'Display 3'
    },
    {
      value: 'display-4',
      label: 'Display 4'
    },
    {
      value: 'display-5',
      label: 'Display 5'
    },
    {
      value: 'display-6',
      label: 'Display 6'
    }
  ],
  ParagraphSizes: [
    {
      value: 'paragraph-1',
      label: 'Paragraph 1'
    },
    {
      value: 'paragraph-2',
      label: 'Paragraph 2'
    },
    {
      value: 'paragraph-3',
      label: 'Paragraph 3'
    },
    {
      value: 'paragraph-4',
      label: 'Paragraph 4'
    }
  ],
  CTATypes: [
    {
      value: '',
      label: 'None'
    },
    {
      value: 'btn-primary',
      label: 'Primary'
    },
    {
      value: 'btn-secondary',
      label: 'Secondary'
    },
    {
      value: 'text-light',
      label: 'Light'
    },
    {
      value: 'text-dark',
      label: 'Dark'
    }
  ],
  Directions: [
    {
      value: 'left',
      label: 'Left'
    },
    {
      value: 'right',
      label: 'Right'
    },
    {
      value: 'center',
      label: 'Center'
    }
  ],
  Paddings: [
    {
      value: '3',
      label: 'Small'
    },
    {
      value: '4',
      label: 'Medium'
    },
    {
      value: '5',
      label: 'Large'
    }
  ]
}

export const genRanHex = (size: number) =>
  [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

export const html = (html: string) => RawHTML({ children: html });
