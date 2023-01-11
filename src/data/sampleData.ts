import { Content } from '../types/ContentType';

const data: Content = {
  name: 'root',
  isFolder: true,
  content: [
    {
      name: 'public',
      isFolder: true,
      content: [
        {
          name: 'index.html',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      content: [
        {
          name: 'App.js',
          isFolder: false,
        },
        {
          name: 'index.js',
          isFolder: false,
        },
        {
          name: 'Awesome folder',
          isFolder: true,
          content: [
            {
              name: 'App.js',
              isFolder: false,
            },
            {
              name: 'index.js',
              isFolder: false,
            },
          ]
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
  ],
};

export default data;
