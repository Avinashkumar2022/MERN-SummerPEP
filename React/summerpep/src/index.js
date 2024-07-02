import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
    // <App2/>
    // <App3/>
    // <App/>

);