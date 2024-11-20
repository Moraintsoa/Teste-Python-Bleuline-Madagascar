import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { user_connected } from '../endpoint/api';

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null: en attente, true: connecté, false: non connecté
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { name, id } = await user_connected();
                if (name && id) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    navigate('/');
                }
            } catch (error) {
                setIsAuthenticated(false);
                navigate('/');
            }
        };
        checkAuth();
    }, [navigate]);

    if (isAuthenticated === null) {
        // En attente de la vérification
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : null;
};

export default PrivateRoute;
