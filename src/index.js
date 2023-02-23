import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '../src/store/store';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Provider store={store}>
    {/* <HashRouter>
        <App/>
    </HashRouter> */}


     <BrowserRouter>
        <App />
    </BrowserRouter>    
    </Provider>
</React.StrictMode>
);

reportWebVitals();

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );



// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
//   <StrictMode>
//      <Provider store={store}>
//         <BrowserRouter>
//              <App />
//          </BrowserRouter>
//          </Provider>
//   </StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
