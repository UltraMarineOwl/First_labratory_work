// import React, {useState} from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import {HeaderLayout} from "./Layouts/HeaderLayout";
import {useEffect, useState} from "react";

function App() {

    // const [token, setToken] = useState();

  return (
      <>
          <HeaderLayout></HeaderLayout>
        <LayoutCustom></LayoutCustom>
      </>
  );
}

export default App;
