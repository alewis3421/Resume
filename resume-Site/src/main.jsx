import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './Index.jsx'

const root = document.getElementById('root');

createRoot(root).render(
    
    <Router>
        <Index />
    </Router>
)
