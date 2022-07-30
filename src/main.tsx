import { render } from 'preact'
import { Clock } from './pages/Clock'

import './theme/apply-colors-to-root.scss'
import './main.css'

render(<Clock />, document.getElementById('app') as HTMLElement)
