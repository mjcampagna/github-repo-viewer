import './css/normalize.css'
import './css/reset.css'
import './css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import PageLayout from 'components/PageLayout'
import ViewController from 'components/ViewController'

const App = () => (
  <PageLayout>
    <ViewController />
  </PageLayout>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
