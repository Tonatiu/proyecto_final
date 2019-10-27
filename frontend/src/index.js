import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/main';
import HeaderRouter from './components/common/header_router';
import Footer from './components/common/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HeaderRouter />, document.getElementById('header'))
ReactDOM.render(<MainPage />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
