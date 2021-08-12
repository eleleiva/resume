import { library } from '@fortawesome/fontawesome-svg-core';

import { icons } from 'assets/icons';

import './app.css';

library.add(icons);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
