import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import User from '../pages/user/User';
import { Register } from '../pages/register/Register';
import Detailtache from '../pages/detailtache/Detailtache';
import Listetache from '../pages/listetaches/Listetache';
import Modification from '../pages/modification/Modification';
import Admin from '../pages/admin/Admin';
import PrivateRoute from '../utils/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: 'accueil',
        element: (
            <PrivateRoute>
                <User />
            </PrivateRoute>
        ),
        children: [
            { path: '', element: <Listetache /> },
            { path: 'detail/:id', element: <Detailtache /> },
            { path: 'modification/:id', element: <Modification /> },
            { path: 'admin', element: <Admin /> },
        ],
    },
]);

export default router;
