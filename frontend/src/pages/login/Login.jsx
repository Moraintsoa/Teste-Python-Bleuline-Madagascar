import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/userapi/login/', {
                username: username,
                password: password,
            });


            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem('access', response.data.access);


            console.log('Connexion réussie', response.data);
            window.location.href = "/accueil";
        } catch (error) {
            setError('Nom d\'utilisateur ou mot de passe incorrect.');
            console.error(error);
        }
    };

    return (
        <>
            <div className="Login d-flex flex-column m-auto py-5 px-4 shadow-sm border border-secondary-subtle rounded">
                <div className='d-flex justify-content-center m-auto my-3'>
                    <img src={'./img/logo.jpg'} alt="Logo" className="img-fluid" />
                </div>
                <div className="Login-container d-flex flex-column justify-content-center">
                    {/* Champ pour le pseudo */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="Pseudo"
                            placeholder="Pseudo"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="Pseudo">Pseudo</label>
                    </div>

                    {/* Champ pour le mot de passe */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Mot de passe</label>
                    </div>


                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="d-flex m-1 justify-content-end">
                        <small className="m-0">Créer un compte? <NavLink to="/register">Cliquer ici</NavLink></small>
                    </div>


                    <NavLink to={'/accueil'} className={'d-grid mt-4 mb-4'}>
                        <button className="btn btn-primary" type="button" onClick={handleLogin}>
                            Se connecter
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Login;
