import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DCScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = ({ history }) => {
	return (
		<>
			<Navbar />

			<div className="container mt-2">
				<Switch>
					<Route exact path="/marvel" component={MarvelScreen} />
					<Route exact path="/hero/:heroeId" component={HeroScreen} />
					<Route exact path="/dc" component={DCScreen} />
					<Route exact path="/search" component={SearchScreen} />

					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};
