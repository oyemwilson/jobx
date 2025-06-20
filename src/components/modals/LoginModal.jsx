import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../../css/loginmodal.css'
import { login, logout } from '../../actions/UserActions';
import { useNavigate, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useRef } from 'react';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const closeModal = () => {
    const modalshow = document.getElementById('loginModal');
    if (modalshow) {
      const closeButton = modalshow.querySelector('[data-bs-dismiss="modal"]');
      if (closeButton) {
        closeButton.click();
      }
    }
  };

  const navigateBasedOnRole = (userRole) => {
    switch (userRole) {
      case 'applicant':
        navigate('/applicant-dashboard');
        break;
      case 'employer':
        navigate('/employer-dashboard');
        break;
      case 'admin':
        navigate('/admin-dashboard');
        break;
      default:
        console.warn('Unknown user role:', userRole);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (isLoggingIn) return; // Prevent double submission
    
    setIsLoggingIn(true);
    
    try {
      const actionResult = await dispatch(login({ email, password }));
      
      console.log('Login action result:', actionResult); // Debug log
      
      // Check different possible success indicators
      const isSuccess = 
        actionResult?.type?.endsWith('/fulfilled') || 
        actionResult?.payload?.success === true ||
        actionResult?.payload?.user ||
        actionResult?.meta?.requestStatus === 'fulfilled';
      
      if (isSuccess) {
        const loggedInUser = actionResult.payload?.user;
        
        if (loggedInUser?.role) {
          console.log('Navigating based on role:', loggedInUser.role); // Debug log
          navigateBasedOnRole(loggedInUser.role);
          closeModal();
        } else {
          // Wait a bit for Redux state to update, then check again
          setTimeout(() => {
            const currentState = document.querySelector('[data-user-state]')?.dataset.userState;
            if (isAuthenticated && user?.role) {
              console.log('Delayed navigation for role:', user.role); // Debug log
              navigateBasedOnRole(user.role);
              closeModal();
            }
          }, 100);
        }
      } else if (actionResult?.type?.endsWith('/rejected')) {
        // Handle login failure
        console.error('Login failed:', actionResult.payload || actionResult.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle navigation when Redux state updates (fallback)
  useEffect(() => {
    console.log('useEffect triggered:', { isAuthenticated, userRole: user?.role, isLoggingIn }); // Debug log
    
    if (isAuthenticated && user?.role && isLoggingIn) {
      console.log('useEffect navigation for role:', user.role); // Debug log
      navigateBasedOnRole(user.role);
      closeModal();
      setIsLoggingIn(false);
    }
  }, [isAuthenticated, user?.role, isLoggingIn]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSignUpClick = () => {
    closeModal();
    navigate('/register');
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content loginmodal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="login-text text-center">
                <p className='display-3'>Hi, Welcome Back</p>
                <p className='fw-lighter'>Still do not have an account? <a href="/register" className='fw-normal text-decoration-none signup-btn'>Sign up</a> </p>
              </div>
              <form className='container' onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email*</label>
                  <input
                    type="email"
                    className="form-control login-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group pt-4">
                  <label htmlFor="exampleInputPassword1">Password*</label>
                  <input
                    type="password"
                    className="form-control login-input"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="form-group form-check my-3 col-lg-6 col-md-6 col-sm-6">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <a href="" className='text-decoration-none'>
                      <p className='mb-0 text-dark text-end'>forgot password?</p>
                    </a>
                  </div>
                </div>
                
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                
                {(loading || isLoggingIn) && (
                  <div className="text-center">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn text-light w-100 login-submit" 
                  disabled={loading || isLoggingIn}
                >
                  {isLoggingIn ? 'Signing In...' : 'Submit'}
                </button>
                
                <div className="d-flex align-items-center mt-4 mb-3">
                  <div className="line"></div><span className="pe-3 ps-3">OR</span><div className="line"></div>
                </div>
                
                <div className='text-center'>
                  <p>Don't have an account? <span> 
                    <Link 
                      to="/register" 
                      className="fw-normal text-decoration-none signup-btn" 
                      onClick={handleSignUpClick}
                    >
                      <span>Sign Up</span>
                    </Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;