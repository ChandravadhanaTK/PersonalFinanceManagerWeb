import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/css/util.css'
// import './assets/css/main.css'
import './assets/css/style.css'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'

import { Provider } from 'react-redux'
import store from './store'

import App from './App';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

registerServiceWorker()
