import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/remix'

import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<>
		<App />
		<SpeedInsights />
	</>
)
