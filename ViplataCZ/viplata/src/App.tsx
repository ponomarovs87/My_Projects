import React from "react";
import Provider from "components/Provider";
import { Header } from "./components/Header/Header";
import { ContentWithProvider } from "./components/Content/Content";

function App() {
	return (
		<Provider>
			<Header />
			<ContentWithProvider />
		</Provider>
	);
}

export default App;
