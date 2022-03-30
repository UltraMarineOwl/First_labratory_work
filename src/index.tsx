import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import storageContain from "./mobx_imp/local_store/StoreContain";
import { ILocalStorage} from "./Interfaces/interface";

const StoreContent = React.createContext<ILocalStorage | any>(null)

export const useLocalStorage = () => React.useContext(StoreContent)

const StoreContain = ({ children }: { children: ReactElement}) =>{
    return(
        <StoreContent.Provider value={ storageContain }>
            {children}
        </StoreContent.Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
      {/*<BrowserRouter>*/}
          <StoreContain>
              <App />
          </StoreContain>
      {/*</BrowserRouter>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
