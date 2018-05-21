import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

document.addEventListener("copy", event => {
  event.preventDefault()
  event.clipboardData.setData("text/plain", 'markpavlovski@gmail.com')
  window.Materialize.toast('Email copied to clipboard.', 1000)
})
