// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
// ----------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
