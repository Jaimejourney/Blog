import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import reducer from './store/reducer';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);


const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
