import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { icons } from 'assets/icons';
import { MainPage } from 'pages/MainPage';

library.add(icons);

function App() {
  return <MainPage />;
}

export { App };
