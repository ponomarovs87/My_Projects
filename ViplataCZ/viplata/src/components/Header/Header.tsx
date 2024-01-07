import React, { useContext } from "react";
import styles from "./Header.module.css";
import { MyContext } from "components/Provider";
import { TestProvider } from "./TestProvider";

export const Header: React.FC<{}> = () => {
	const contextValue = useContext(MyContext);

	if (!contextValue) {
		// Обработка случая, если контекст не был предоставлен
		return null;
	}

	const { countValue } = contextValue;
	const { increment } = countValue;

	return (
		<div className={styles.headerBox}>
			<b>Vyplata CZ</b>
			<button onClick={increment}>Инкремент +</button>
            <TestProvider/>
		</div>
	);
};
