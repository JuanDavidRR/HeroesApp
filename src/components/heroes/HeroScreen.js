import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
// import batman from "../../assets/heroes/dc-batman.jpg";

const heroImages = require.context("../../assets/heroes");

export const HeroScreen = ({ history }) => {
	const { heroeId } = useParams();

	const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

	if (!hero) {
		return <Redirect to="/" />;
	}

	const handleReturn = () => {
		if (history.length <= 2) {
			history.push("/");
		} else {
			history.goBack();
		}
	};

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	return (
		<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4">
			<div className="col animate__animated animate__fadeInLeft">
				<img
					// src={`../assets/heroes/${heroeId}.jpg`}
					// src={batman}
					src={heroImages(`./${heroeId}.jpg`)}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col animate__animated animate__fadeIn mt-3">
				<h3 className="text-center"> {superhero} </h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						{" "}
						<b> Alter ego: </b> {alter_ego}{" "}
					</li>
					<li className="list-group-item">
						{" "}
						<b> Publisher: </b> {publisher}{" "}
					</li>
					<li className="list-group-item">
						{" "}
						<b> First appearance: </b> {first_appearance}{" "}
					</li>
				</ul>

				<h5> Characters </h5>
				<p> {characters} </p>

				<button
					className="btn btn-outline-info"
					onClick={handleReturn}
				>
					Return
				</button>
			</div>
		</div>
	);
};
