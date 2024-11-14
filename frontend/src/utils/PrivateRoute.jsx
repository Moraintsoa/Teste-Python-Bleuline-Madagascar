import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

// Composant pour protéger les routes
const PrivateRoute = ({ element: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Vérifier l'authentification côté serveur
                const response = await axios.get('http://localhost:8000/api/auth/verify', {
                    withCredentials: true, // Assure que le cookie de session est envoyé
                });

                // Si l'utilisateur est authentifié
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                // Si la vérification échoue, l'utilisateur n'est pas authentifié
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Affiche un loader tant que la vérification n'est pas terminée
    if (loading) {
        return <div>Loading...</div>;
    }

    // Si l'utilisateur est authentifié, affiche le composant
    return isAuthenticated ? Component : <Navigate to="/" />;
};

export default PrivateRoute;
