import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const history = useHistory();

	const handeLogout = () => {
		history.replace("/login");
		dispatch({
			type: types.logout,
		});
	};
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarScroll">
					<Link className="navbar-brand" to="/">
						HeroApp
					</Link>

					<div className="navbar-collapse">
						<div className="navbar-nav">
							<NavLink
								activeClassName="active"
								className="nav-item nav-link"
								exact
								to="/marvel"
							>
								Marvel
							</NavLink>

							<NavLink
								activeClassName="active"
								className="nav-item nav-link"
								exact
								to="/dc"
							>
								DC
							</NavLink>

							<NavLink
								activeClassName="active"
								className="nav-item nav-link"
								exact
								to="/search"
							>
								Search
							</NavLink>
						</div>
					</div>
				</div>

				<div className="nav-navbar d-flex">
					<span className="nav-item nav-link text-info">
						{user.name}
					</span>
					<button
						href="/login"
						onClick={handeLogout}
						className="nav-item nav-link btn text-primary"
					>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};
