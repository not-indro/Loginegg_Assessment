import './App.css';
import { useEffect, useState, useRef } from 'react';
import {
  AdminPortal,
  useAuth,
  useLoginWithRedirect,
  useAuthActions,
  useTenantsState,
  ContextHolder,
  useStepUp,
  useIsSteppedUp,
} from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();
  const { tenants } = useTenantsState();
  const loginWithRedirect = useLoginWithRedirect();
  const stepUp = useStepUp();
  const MAX_AGE = 60 * 60;
  const isSteppedUp = useIsSteppedUp({ maxAge: MAX_AGE });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [selectedTenantId, setSelectedTenantId] = useState(user?.tenantId);
  const [selectedTenantName, setSelectedTenantName] = useState('');

  useEffect(() => {
    if (tenants.length > 0 && selectedTenantId) {
      const tenant = tenants.find((t) => t.tenantId === selectedTenantId);
      setSelectedTenantName(tenant ? tenant.name : tenants[0].name);
    }
  }, [tenants, selectedTenantId]);

  const handleTenantSwitch = (tenant) => {
    setSelectedTenantId(tenant.tenantId);
    setSelectedTenantName(tenant.name);
    switchTenant({ tenantId: tenant.tenantId });
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect({});
    }
  }, [isAuthenticated, loginWithRedirect]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const showAdminPortal = () => {
    AdminPortal.show();
    // Removed setIsAdminPortalOpen as it's no longer used
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="user-zone">
          <h1>Welcome to FRONTEGG</h1>
          <p className="intro-text">
            This app demonstrates Frontegg's authentication and authorization features.
          </p>

          <div className="profile-section">
            <img
              src={user?.profilePictureUrl}
              alt={user?.name}
              referrerPolicy="no-referrer"
              className="profile-pic"
            />
            <span className="user-name">{user?.name}</span>
          </div>

          <div className="button-row">
            <div className="button-container">
              {isSteppedUp ? (
                <div className="stepped-up-message">You are STEPPED UP!</div>
              ) : (
                <button
                  className="action-button"
                  onClick={() => stepUp({ maxAge: MAX_AGE })}
                >
                  Step up MFA
                </button>
              )}
              <p className="button-description">
                Additional verification step before granting access to restricted
                app areas.
              </p>
            </div>
            <div className="button-container">
              <button className="action-button" onClick={showAdminPortal}>
                Open Admin Portal
              </button>
              <p className="button-description">
                Fully self-served, comprehensive set of tools for user-management,
                authentication, security, and more for your end-users.
              </p>
            </div>
            <div className="button-container">
              <button className="action-button logout-button" onClick={logout}>
                Logout
              </button>
              <p className="button-description">End user session.</p>
            </div>
          </div>

          
            <div className="custom-dropdown" onClick={toggleDropdown} ref={dropdownRef}>
              <div className="dropdown-selected">{selectedTenantName}</div>
              {isDropdownOpen && (
                <div className="dropdown-options">
                  {tenants
                    .filter((tenant) => tenant.tenantId !== selectedTenantId)
                    .map((option, index) => (
                      <div
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleTenantSwitch(option)}
                      >
                        {option.name}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
      
      ) : (
        <div className="login-section">
          <button className="login-button" onClick={() => loginWithRedirect()}>
            Click me to login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
