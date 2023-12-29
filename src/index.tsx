import ReactDOM from 'react-dom/client'
import Application from './Application'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('application') as HTMLElement
)
root.render(<Application />)
