import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/store'
import './index.css';

ReactDOM.render((
  <Provider store={configureStore()} key="provider">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root') as HTMLElement);
registerServiceWorker();
