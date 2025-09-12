import './App.css'
import {Button} from "primereact/button";
import {GridDemo} from "./components/GridDemo.jsx";

function App() {
	return (<>
			<h1 className="text-3xl font-bold underline text-red-500" >
				Hello
			</h1 >
			<h2 className="text-2xl font-light text-red-300 " >World!</h2>
			<Button label="Primary" />
			<Button label="Secondary" severity="secondary" />
			<Button label="Success" severity="success" />
			<Button label="Info" severity="info" />
			<Button label="Warning" severity="warning" />
			<Button label="Help" severity="help" />
			<Button label="Danger" severity="danger" />
			<GridDemo />
		</>
	)
}

export default App
