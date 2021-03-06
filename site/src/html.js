import React from 'react';

import favicon from 'static/favicon.png';

let stylesStr;

export default function Html({headComponents, body, postBodyComponents}) {
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        key="gatsby-inlined-css"
        dangerouslySetInnerHTML={{__html: stylesStr}}
      />
    );
  }
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="1y4iC3OGeUJux6b_jjWF__YZxL4qUAc14lDv7wr7Wbg"
        />
        <link rel="shortcut icon" href={favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {headComponents}
        {css}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  );
}
