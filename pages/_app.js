// This file ensures compatibility with the Pages Router
// It only handles routes in the /pages directory and doesn't interfere with app/

import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp; 