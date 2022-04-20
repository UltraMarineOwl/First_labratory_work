import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import {HeaderLayout} from "./Layouts/HeaderLayout";

function App() {
  return (
      <>
          <HeaderLayout></HeaderLayout>
        <LayoutCustom></LayoutCustom>
      </>
  );
}

export default App;
