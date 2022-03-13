import './css/normalize.css'
import './css/reset.css'
import './css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import ViewController from 'components/ViewController'

const App = () => (
  <ViewController />
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
