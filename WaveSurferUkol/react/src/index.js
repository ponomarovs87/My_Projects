import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Ukol from "./Components/Ukol"

const App = () => {
	return (
		<>
			<div>
				<p>
					Vytvoř (podle dokumentace) pod zvukovou stopou 3 funkční elementy: a) zoom in (5x) b) zoom out (5x)
					c) aktuální čas (takže když před samotným spuštěním přehrávače klikneš na půlku, ukáže ti to tento
					čas) Zařiď, aby čas písně po kliknutí na zvukovou stopu ukazoval správnou hodnotu i v zoom in.
				</p>
			</div>
			<Ukol/>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
