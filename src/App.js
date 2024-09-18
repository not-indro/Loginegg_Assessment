import React, { useEffect } from 'react';
import './App.css';
import { ContextHolder } from '@frontegg/rest-api';
import { AdminPortal, useAuth, useLoginWithRedirect } from '@frontegg/react';



function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Automatically redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // Function to open the Admin Portal
  const openAdminPortal = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="card">
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className="detail">
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Email: {user?.email}</span>
          </div>
          <div>
            <button onClick={logout} className="button">
              Logout
            </button>
            <button onClick={openAdminPortal} className="button">
              Settings
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={loginWithRedirect} className="button">
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
