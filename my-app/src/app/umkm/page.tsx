'use client';

import { Global, css } from '@emotion/react';
import MapComponent from "./components/MapComponent";
import MenuAtas from './MenuAtas/page';
import Sidebar from "./Sidebar/page";
import MenuUser from './MenuUser/page';

const App = () => {
  return (
    <div className="App">
      <Global
        styles={css`
          html {
            * {
              box-sizing: border-box;
            }
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            padding: 0;
            margin: 0;
          }
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <MapComponent />
      {/* <MenuAtas /> */}
      <Sidebar />
      {/* <MenuUser /> */}
    </div>
  );
};

export default App;
