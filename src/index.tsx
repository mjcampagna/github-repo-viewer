import './css/normalize.css'
import './css/reset.css'
import './css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { styled } from '@stitches/react'

import RequestForm from './components/RequestForm'

const PageBody = styled('div', {
  padding: 12,
})

const App = () => (
  <PageBody>
    <RequestForm />
  </PageBody>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
