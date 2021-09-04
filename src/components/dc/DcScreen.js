import React from "react";
import { HeroList } from "../heroes/HeroList";
import dc from "../../assets/publishers/dc.png";

export const DCScreen = () => {
	return (
		<div className="text-center mt-3">
			<img src={dc} alt="marvel"></img>
			<hr />
			<HeroList publisher="DC Comics" />
		</div>
	);
};
