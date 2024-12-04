import React, { useState } from 'react';
import Header from './components/Header';  // Ensure correct path
import SignupForm from './components/SignupForm';  // Ensure correct path
import LoginForm from './components/LoginForm';    // Ensure correct path
import Dashboard from './components/Dashboard'; 
import { DocumentTextIcon } from '@heroicons/react/outline';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);  // Toggle between forms
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state
  const [userName, setUserName] = useState('');          // Store user's name

  // Handle login action from LoginForm
  const handleLogin = (username) => {
    setIsLoggedIn(true);   // Set login status to true
    setUserName(username); // Set the user's name after login
  };

  // Handle logoutnpm i --save-dev @types/heroicons__react
  const handleLogout = () => {
    setIsLoggedIn(false);  // Set login status to false
    setUserName('');        // Clear the user's name on logout
  };

  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1 flex items-center justify-center">
        {/* Render Login/Signup form if not logged in */}
        {!isLoggedIn ? (
          showSignup ? (
            <SignupForm onSwitchToLogin={() => setShowSignup(false)} />
          ) : (
            <LoginForm
              onSwitchToSignup={() => setShowSignup(true)}
              onLogin={handleLogin} // Pass login handler to LoginForm
            />
          )
        ) : (
          // Render Dashboard if logged in
          <Dashboard userName={userName} handleLogout={handleLogout} />
        )}
      </main>
    
      </div>
  );
};

export default App;
