import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import MainPage from './pages/MainPage';

library.add(fab, fas);

function App() {
  return <MainPage />;
}

export default App;
