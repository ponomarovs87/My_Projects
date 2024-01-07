import { MyContext } from "components/Provider";
import React, { useContext } from "react";

export const TestProvider: React.FC<{}> = () => {
	const contextValue = useContext(MyContext);

	if (!contextValue) {
		// Обработка случая, если контекст не был предоставлен
		return null;
	}

	const { countValue } = contextValue;
	const { count } = countValue;

	return (
		<div>
			<b>{count}</b>
		</div>
	);
};
