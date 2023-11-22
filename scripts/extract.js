import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { JSDOM } from 'jsdom';

import {Main} from '../src/pages/components/Main.tsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {books} from '../src/config/books';
import {booksReducer} from '../src/entities/books/reducer/books.reducer.ts';
import {widgetsReducer} from '../src/widgets/index.ts';

// Command-line arguments
const elementId = process.argv[2];
const htmlFilePath = process.argv[3];

// Read the HTML file
const html = fs.readFileSync(htmlFilePath, 'utf8');

// Create a virtual DOM for the HTML
const { window } = new JSDOM(html);
global.window = window;
global.document = window.document;

const store=configureStore({
  reducer: { books: booksReducer, widgets: widgetsReducer },
  preloadedState: {
    books,
    widgets: {
      modal: {
        isOpen: false,
        action: undefined,
        id: undefined,
        initValues: undefined
      }
    }
  }
})
// Render the React component to a string
const renderedHtml = ReactDOMServer.renderToString(<Provider store={store}><Main/></Provider>);

// Insert the rendered HTML into the target element
const targetElement = global.document.getElementById(elementId);
if (targetElement) {
  targetElement.innerHTML = renderedHtml;
} else {
  console.error(`Element with ID '${elementId}' not found in the HTML file.`);
  process.exit(1);
}

// Save the modified HTML to a file
const modifiedHtml = window.document.documentElement.outerHTML;
fs.writeFileSync(htmlFilePath, modifiedHtml);

console.log(`Rendered HTML saved to ${htmlFilePath}`);
