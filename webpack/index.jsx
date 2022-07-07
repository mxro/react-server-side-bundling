import React from 'react';
import { renderToString } from 'react-dom/server';

console.log('rendered: ', renderToString(<div>Test</div>));
