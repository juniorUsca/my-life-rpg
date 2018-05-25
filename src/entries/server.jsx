/*import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import Pages from './pages/containers/Page';
import Layout from './pages/components/Layout';
import store from './store'

const staticsDomain = process.env.NODE_ENV === 'production' ?
  'https://junior-react-statics.now.sh' :
  'http://localhost:3001'

function titleHandler(url) {
  if (url === '/') return 'title.home'
  if (/^\/post\/[0-9]+$/.test(url)) return 'title'
  if (/^\/user\/[0-9]+$/.test(url)) return 'profile.title'
  return 'error.404'
}

function requestHandler(req, res) {
  const context = {};

  const html = renderToString(
    <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Pages />
        </StaticRouter>
    </Provider>,
  );


  res.setHeader('Content-Type', 'text/html');

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  }

  // console.log('desde el server\n', html);
  // res.write( html );
  res.write(
    renderToStaticMarkup(
        <Layout
          content={html}
        />
      ,
    ),
  );
  res.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);

*/

import express from 'express'
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Layout from '../server/layout.jsx';
import App from '../app/app.jsx'


const server = express()

// change build by public
server.use(express.static('build'))

//app.get('/', (req, res) => res.send('Hello World!'))
server.get('*', (req, res) => {
  const html = renderToString(
    <App />
  )
  res.status(200).send(
    renderToStaticMarkup(
      <Layout
        content={html}
      />
    )
  )
})



server.listen(3000, () => console.log('Example app listening on port 3000!'))