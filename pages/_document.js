import Document, { Html, Head, Main, NextScript } from 'next/document';

function widthLog(Comp) {
  return (props) => {
    console.log(props);
    return <Comp {...props}/>
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => widthLog(App),
      enhanceComponent: Component => widthLog(Component)
    })
    
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