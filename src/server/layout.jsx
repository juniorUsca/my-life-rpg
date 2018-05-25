import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>Hola</title>
        <link rel="stylesheet" href={`main.css`} />
        <link rel="stylesheet" href={`styles.css`} />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script src={'/statics/app.js'} />
      </body>
    </html>
  )
}

Layout.propTypes = {
  content: PropTypes.string.isRequired,
}

Layout.defaultProps = {}

export default Layout;
