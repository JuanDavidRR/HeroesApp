import React from "react";
import { Link } from "react-router-dom";

const heroImages = require.context("../../assets/heroes");

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) => {
	return (
		<div className="col mt-3">
			<div className="card text-center animate__animated animate__bounce">
				<Link to={`./hero/${id}`}>
					<img
						src={heroImages(`./${id}.jpg`)}
						className="card-img-top"
						alt={superhero}
					></img>
				</Link>
				<div className="card-body">
					<h5 className="card-title">{superhero}</h5>
					<p className="card-text">{alter_ego}</p>
					{alter_ego !== characters && (
						<p className="card-text">{characters}</p>
					)}
				</div>
				<Link
					to={`./hero/${id}`}
					className="btn btn-outline-primary m-2"
				>
					View More
				</Link>

				<div className="card-footer">
					<small className="text-muted">{first_appearance}</small>
				</div>
			</div>
		</div>
	);
};
