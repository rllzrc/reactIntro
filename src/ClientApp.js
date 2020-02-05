import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// * for server side rendering --> key concern in performance. to serve v lean web apps; to load correct content first in regards to UX

// * server side rendering is a technique where you can run React on Node.js server before you even serve the request to the user and send first rendering of site already done
// * saves precious milliseconds; downloads the HTML and see the first rendered page while React loads in the background

// * window will have to be inside componentDidMount since it doesnt get called in Node...

ReactDOM.hydrate(<App />, document.getElementById('root'));