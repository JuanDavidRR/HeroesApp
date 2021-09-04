import React from "react";
import { HeroList } from "../heroes/HeroList";
import marvel from "../../assets/publishers/marvel.jpg";

export const MarvelScreen = () => {
	return (
		<div className="text-center mt-3">
			<img src={marvel} alt="marvel"></img>
			<hr />
			<HeroList publisher="Marvel Comics" />
		</div>
	);
};
