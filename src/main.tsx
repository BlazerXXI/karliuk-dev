import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<>
		<App />
		<SpeedInsights />
	</>
)
