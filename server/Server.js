import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/App';

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('dist/indext.html').toString();

const ports = html.split('not rendered');

const app = express();

app.use('/dist', express.static('dist'));

app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// * express = a node.js web server framework
// * listen on 3000 unless environment var passed in saying otherwise >> why?! if tru to deploy watch our for PORT
// statically serve what parcel built
// anything parcel deosn't serve give to index.html (lets client side app handle all routing)]
// * compiled html 