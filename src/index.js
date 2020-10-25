import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.html';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();