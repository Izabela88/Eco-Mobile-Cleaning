import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { RouterScrollProvider } from '@moxy/next-router-scroll';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
