import React, { useState, useEffect } from 'react';
import '../Css/LoginSignupForm.css'; // Ensure this path is correct

const LoginSignupForm = ({ closeForm }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [usernameExists, setUsernameExists] = useState('');
  const [requirements, setRequirements] = useState({
    length: false,
    specialChar: false,
    capitalLetter: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    resetForm();
  };

  const showForgotPassword = () => {
    setIsForgotPassword(true);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setPasswordStrength('');
    setPasswordAlert('');
    setEmailError('');
    setUsernameError('');
    setUsernameExists('');
    setRequirements({ length: false, specialChar: false, capitalLetter: false });
  };

  const evaluatePasswordStrength = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const isValidLength = password.length >= 8;

    setRequirements({
      length: isValidLength,
      specialChar: hasSpecialChar,
      capitalLetter: hasCapitalLetter,
    });

    if (password.length === 0) {
      setPasswordStrength('');
      setPasswordAlert('');
    } else if (!isValidLength) {
      setPasswordStrength('weak');
      setPasswordAlert('Password must be at least 8 characters long.');
    } else if (!hasSpecialChar || !hasCapitalLetter) {
      setPasswordStrength('medium');
      setPasswordAlert('Password must include at least one special character and one capital letter.');
    } else {
      setPasswordStrength('strong');
      setPasswordAlert('');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleUsernameChange = async (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (!isLogin && newUsername.trim() === '') {
      setUsernameError('Username is required for signup.');
    } else {
      setUsernameError('');
    }

    if (!isLogin) {
      try {
        const response = await fetch(`http://localhost:5000/check-username/${newUsername}`);
        const result = await response.json();

        if (response.ok && result.exists) {
          setUsernameExists('Username is already taken.');
        } else {
          setUsernameExists('');
        }
      } catch (error) {
        console.error('Error checking username:', error);
      }
    }
  };

  useEffect(() => {
    if (
      (isLogin || passwordStrength === 'strong') &&
      emailError === '' &&
      (isLogin || usernameError === '' && usernameExists === '')
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [passwordStrength, emailError, usernameError, usernameExists, isLogin]);

  const submitForm = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? '/login' : '/signup';
    const requestData = {
      email,
      password,
      ...(isLogin ? {} : { username }),
    };

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
        alert('Successful!');
        closeForm();
      } else {
        alert(result.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-signup-form">
      <button className="close-button" onClick={closeForm}>&times;</button>
      <img
        src="https://clipartcraft.com/images/google-logo-transparent-cute.png"
        alt="Login/Sign Up"
        className="form-image"
      />
      {!isForgotPassword ? (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={submitForm}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required={!isLogin}
                />
                {usernameError && <div className="error-message">{usernameError}</div>}
                {usernameExists && <div className="error-message">{usernameExists}</div>}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" checked={requirements.length} readOnly />
                  At least 8 characters
                </label>
                <label>
                  <input type="checkbox" checked={requirements.specialChar} readOnly />
                  At least one special character
                </label>
                <label>
                  <input type="checkbox" checked={requirements.capitalLetter} readOnly />
                  At least one capital letter
                </label>
              </div>
              <div className={`password-strength ${passwordStrength}`}>
                {passwordStrength && (
                  <span className="password-strength-text">
                    {passwordStrength === 'weak' && 'Weak'}
                    {passwordStrength === 'medium' && 'Medium'}
                    {passwordStrength === 'strong' && 'Strong'}
                  </span>
                )}
              </div>
              {passwordAlert && (
                <div className="alert-message">
                  <span>{passwordAlert}</span>
                </div>
              )}
            </div>
            <button type="submit" disabled={!isFormValid}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          {isLogin && (
            <p className="forgot-password">
              <button className="forgot-password-button" onClick={showForgotPassword}>
                Forgot Password?
              </button>
            </p>
          )}
          <p>
            {isLogin ? 'New user?' : 'Already have an account?'}{' '}
            <button className="toggle-button" onClick={toggleForm}>
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </>
      ) : (
        <>
          <h2>Reset Password</h2>
          <form>
            <div className="form-group">
              <label htmlFor="reset-email">Email:</label>
              <input
                type="email"
                id="reset-email"
                name="reset-email"
                required
              />
            </div>
            <button type="submit">Reset Password</button>
            <p>
              Remembered your password?{' '}
              <button className="toggle-button" onClick={toggleForm}>
                Login
              </button>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginSignupForm;
