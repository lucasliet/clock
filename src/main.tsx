import { render } from 'preact'
import { Clock } from './pages/Clock'

import './main.css'

render(<Clock />, document.getElementById('app') as HTMLElement)
