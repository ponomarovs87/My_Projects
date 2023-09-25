import React from "react";
import { TasksHomePage } from "./UI/TasksHomePage";
import styles from "./app.module.css";

function App() {
	return (
		<div className={styles.App}>
			<TasksHomePage />
		</div>
	);
}

export default App;
