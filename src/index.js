import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './home';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <Router>
      <Link to="/"> app</Link>
      
      <Link to="/home"> home</Link>
      <div>
        <Route exact path='/'>
          <App/>
        </Route>
        <Route exact path='/home' >
          <Home/>
        </Route>
      </div>
    </Router>
    , container ? container.querySelector('#jsroot') : document.querySelector('#jsroot'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#jsroot') : document.querySelector('#jsroot'));
}
