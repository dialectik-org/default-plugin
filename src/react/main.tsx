// @ts-ignore
import Content from './content.md';
// @ts-ignore
import ReactDOM from 'react-dom/client';

// @ts-ignore
import React from 'react';

// @ts-ignore
[[imports]]
// @ts-ignore
const components : MDXComponents = [[getcomponents]]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Content components={ components }/>
  </React.StrictMode>
);