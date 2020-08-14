import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {

    // ctx.renderPage = () => {

    // }

    const props = await Document.getInitialProps(ctx);

    return {
      ...props
    }
  }

  render () {
   return <Html>
      <Head>
      </Head>
      <body className="test">
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument;