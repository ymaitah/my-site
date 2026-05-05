import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the auto-generated route tree
import { routeTree } from './routeTree.gen';

// Import your global CSS so the site looks right!
import './styles.css';

// Create the router instance
const router = createRouter({ routeTree });

// Find the <div id="root"> from your index.html and inject the React app into it
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}