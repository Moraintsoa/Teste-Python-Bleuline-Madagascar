import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { register } from '../../endpoint/api';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const nav = useNavigate()
    // const [error, setError] = useState('');


    const handleRegister = async () => {
            await register(username, password, email).then(()=>{nav('/accueil')})
    };

    return (
        <div className="Login d-flex flex-column m-auto px-4 shadow-sm border border-secondary-subtle rounded">
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

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="Pseudo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="Email">Email</label>
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


                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password_confirmation"
                        placeholder="Confirmer le mot de passe"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <label htmlFor="password_confirmation">Confirmer le mot de passe</label>
                </div>


                {/* {error && <div className="alert alert-danger">{error}</div>} */}

                <div className="d-flex m-1 justify-content-end">
                    <small className="m-0">Vous avez déjà un compte? <a href="/">Cliquer ici</a></small>
                </div>


                <div className={'d-grid mt-4 mb-4'}>
                    <button className="btn btn-primary" type="button" onClick={handleRegister}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

