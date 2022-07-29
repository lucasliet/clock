import { render } from 'preact'
import { Clock } from './clock'

import './main.css'

render(<Clock />, document.getElementById('app') as HTMLElement)
