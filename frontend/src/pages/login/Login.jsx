import React, { useEffect, useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { login, user_connected } from '../../endpoint/api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { name, id } = await user_connected()
                if (name && id) {
                    navigate('/accueil');
                }
            } catch (error) {
                console.error('Erreur lors de la vérification de connexion :', error);
            }
        };
        checkAuth();
    }, [navigate]);

    const handleLogin = async () => {
        try {
            await login(username, password);
            navigate('/accueil');
        } catch (error) {
            console.error('Erreur lors de la connexion :', error)
        }
    };

    return (
        <div className="Login d-flex flex-column m-auto py-5 px-4 shadow-sm border border-secondary-subtle rounded">
            <div className="d-flex justify-content-center m-auto my-3">
                <img src="./img/logo.jpg" alt="Logo" className="img-fluid" />
            </div>
            <div className="Login-container d-flex flex-column justify-content-center">

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

                <div className="d-flex m-1 justify-content-end">
                    <small className="m-0">
                        Créer un compte ? <NavLink to="/register">Cliquer ici</NavLink>
                    </small>
                </div>

                <button className="btn btn-primary" type="button" onClick={handleLogin}>
                    Se connecter
                </button>
            </div>
        </div>
    );
}

export default Login;
