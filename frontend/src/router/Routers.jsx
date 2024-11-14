import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/login/Login'
import User from '../pages/user/User'
import { Register } from '../pages/register/Register'
import Detailtache from '../pages/detailtache/Detailtache'
import Listetache from '../pages/listetaches/Listetache'
import Modification from '../pages/modification/Modification'
// import { useAuth } from '../utils/authContext' 
import PrivateRoute from '../utils/PrivateRoute'


// const PrivateRoute = ({ children }) => {
//     const { isAuthenticated } = useAuth(); 

//     if (!isAuthenticated) {
        
//         return <Navigate to="/" />;
//     }

//     return children; 
// };

const router = createBrowserRouter([
    {
        path: '/', 
        Component: Login
    },
    {
        path: 'register', 
        Component: Register
    },
    {
        path: 'accueil', 
        Component: User,
        element: (
            <PrivateRoute>
                <User />
            </PrivateRoute>
        ),
        children: [
            { path: '', Component: Listetache },
            { path: 'detail/:id', Component: Detailtache },
            { path: 'modification/:id', Component: Modification },
        ]
    },
]);

export default router;










// import { createBrowserRouter } from 'react-router-dom'
// import Login from '../pages/login/Login'
// import User from '../pages/user/User'
// import Admin from '../pages/admin/Admin'
// import { Register } from '../pages/register/Register'
// import Detailtache from '../pages/detailtache/Detailtache'
// import Listetache from '../pages/listetaches/Listetache'
// import Modification from '../pages/modification/Modification'

// const router = createBrowserRouter([
//     {path: '/', Component: Login},
//     {path:'register', Component: Register},
//     {path:'accueil', Component: User,
//         children:[
//             {path:'',Component:Listetache},
//             {path:'detail/:id',Component:Detailtache},
//             {path:'modification/:id', Component: Modification},
//         ]
//     },
// ])

// export default router