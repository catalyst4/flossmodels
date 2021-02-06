import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Floss Models</title>
          <meta name="theme-color" content="#f38cf7" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Floss Models" />
          <meta name="twitter:description" content="UK-based Talent Agency" />
          <meta name="og:image" content="https://flossmodels.vercel.app/img/logo.png" />
          <meta name="twitter:image" content="https://flossmodels.vercel.app/img/logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://kit.fontawesome.com/46b4654e10.js" crossOrigin="anonymous"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument