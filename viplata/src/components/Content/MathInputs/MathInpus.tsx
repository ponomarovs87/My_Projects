import React from "react";

export const MathInpus: React.FC<{}> = () => {
	return (
		<div>
			Математическая хрень
			<form>
				<input type="number" />
				<input type="number" />
				<select id="veekendBonus">
					<option value="100kc">300 крон в субботу</option>
					<option value="10procent">10% дополнительная надбавка</option>
				</select>
                
			</form>
		</div>
	);
};
