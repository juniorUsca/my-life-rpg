import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>Hola</title>
        <link rel="stylesheet" href={`/statics/main.css`} />
        <link rel="stylesheet" href={`/statics/styles.css`} />
        {/*<!-- Compiled and minified CSS -->*/}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"/>
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        {/*<!-- Compiled and minified JavaScript -->*/}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
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
