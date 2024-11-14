import React from 'react';
import { AuthProvider } from './utils/authContext'; // Import du AuthProvider
import { RouterProvider } from 'react-router-dom';
import router from './router/Routers'; // Ton fichier de route

function App() {
  return (
    <AuthProvider> {/* Enveloppe ton application avec AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;







// import './App.css'
// import { RouterProvider } from 'react-router-dom'
// import router from './router/Routers';

// function App() {

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App
