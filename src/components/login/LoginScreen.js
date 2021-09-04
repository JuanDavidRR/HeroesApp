import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import Swal from "sweetalert2";
import "./login.css";

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const [user, setUser] = useState({
		userName: "",
		password: "",
	});

	useEffect(() => {
		JSON.parse(localStorage.getItem("user"));
	}, [user]);

	const handleInputChangeC = ({ target }) => {
		setUser({
			...user,
			[target.name]: target.value,
		});
	};

	const handleCreate = () => {
		setUser({
			userName: user.userName,
			password: user.password,
		});
		localStorage.setItem("user", JSON.stringify(user.userName));
		localStorage.setItem("password", JSON.stringify(user.password));
		Swal.fire(
			"Good job!",
			`You created an account with the following credentials <br>
             <ul>
             <li>Username: ${user.userName} </li>
             <li>Password is ${user.password}</li>
             </ul>
             Do not forget the credentials!`,
			"success"
		);
	};

	const handleLogin = () => {
		// history.push('/');
		//history.replace('/');
		if (
			JSON.parse(localStorage.getItem("user")) === loginName &&
			JSON.parse(localStorage.getItem("password")) === loginPassword
		) {
			//redirecciona al usurio a la última ruta en la que estuvo
			const lastPath = localStorage.getItem("lastPath") || "/";
			dispatch({
				type: types.login,
				payload: {
					name: loginName,
					password: loginPassword,
				},
			});
			Swal.fire(
				"Login success!",
				`Now you can see the heroes`,
				"success"
			);
			history.replace(lastPath);
		} else {
			console.error("Credenciales incorrectas");
			Swal.fire({
				icon: "error",
				title: "Login fail",
				text: "Your credentials are wrong, try again",
			});
		}
	};

	const [login, handleInputChange] = useForm({
		loginName: "",
		loginPassword: "",
	});

	const { loginName, loginPassword } = login;

	return (
		<div className="login-container align-center">
			<h1 className="login-title text-center mt-5">
				Sistema de gestión local de superheroe
			</h1>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 align-middle g-4">
				<div className="col animate__animated animate__fadeInLeft">
					<form className="login-form">
						<h2 className="text-center">Login</h2>
						<hr />
						<input
							className="form-control"
							type="text"
							name="loginName"
							placeholder="username"
							onChange={handleInputChange}
							value={loginName}
							autoComplete="off"
						/>
						<input
							className="form-control mt-4"
							type="password"
							name="loginPassword"
							placeholder="password"
							onChange={handleInputChange}
							value={loginPassword}
							autoComplete="off"
						/>
					</form>
					<div className="d-grid gap-2">
						<button
							onClick={handleLogin}
							className="btn btn-primary submit"
						>
							Login
						</button>
					</div>
				</div>
				<div>
					<form className="create-user">
						<h2 className="text-center">Create User</h2>
						<hr />
						<input
							type="text"
							placeholder="User"
							name="userName"
							className="form-control"
							value={user.userName}
							onChange={handleInputChangeC}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className="form-control mt-4"
							value={user.password}
							onChange={handleInputChangeC}
						/>
					</form>
					<div className="d-grid gap-2">
						<button
							onClick={handleCreate}
							className="btn btn-primary submit"
						>
							Qué se dicen
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
