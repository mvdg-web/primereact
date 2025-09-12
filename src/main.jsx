import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PrimeReactProvider} from "primereact/api";


createRoot(document.getElementById('root')).render(
	<StrictMode >
		<PrimeReactProvider value={{unstyled: true}}>
			<App />
		</PrimeReactProvider >
	</StrictMode >,
)
