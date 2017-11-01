import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'typeface-roboto' // roboto font

import App from './containers/App/App'
import registerServiceWorker from './lib/registerServiceWorker'

import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

// inject touch and tapping functionality needed for Material UI
injectTapEventPlugin()
