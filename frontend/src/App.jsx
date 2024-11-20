import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/Routers';
// import { AuthProvider } from './utils/useAuth';

function App() {
  return (
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider> 
  );
}

export default App;