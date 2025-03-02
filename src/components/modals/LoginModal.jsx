import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import style from '../../css/loginmodal.css'
import { login, logout } from '../../actions/UserActions';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useRef } from 'react';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(true);
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Store current auth state before login attempt
      const wasAuthenticated = isAuthenticated;
      
      // Dispatch login action and capture result
      const actionResult = await dispatch(login({ email, password }));
      
      // First check - if not previously authenticated and action succeeded
      const loginSucceeded = actionResult?.payload?.user || actionResult?.payload?.success;
      
      if (loginSucceeded || (!wasAuthenticated && isAuthenticated)) {
        // Get user info either from result or from state
        const currentUser = actionResult?.payload?.user || user;
        
        // Redirect based on role information we have
        if (currentUser?.role) {
          if (currentUser.role === 'applicant') {
            navigate('/applicant-dashboard');
          } else if (currentUser.role === 'employer') {
            navigate('/employer-dashboard');
          } else if (currentUser.role === 'admin') {
            navigate('/admin-dashboard');
          }
        } else {
          // Fallback if we can't determine role yet - use a timeout
          setTimeout(() => {
            if (isAuthenticated && user?.role) {
              if (user.role === 'applicant') {
                navigate('/applicant-dashboard');
              } else if (user.role === 'employer') {
                navigate('/employer-dashboard');
              } else if (user.role === 'admin') {
                navigate('/admin-dashboard');
              }
            }
            
            // Close modal regardless
            const modalshow = document.getElementById('loginModal');
            if (modalshow) {
              const closeButton = modalshow.querySelector('[data-bs-dismiss="modal"]');
              if (closeButton) {
                closeButton.click();
              }
            }
          }, 500);
        }
      } else if (isAuthenticated && user) {
        // Handle case where user is already authenticated
        if (user.role === 'applicant') {
          navigate('/applicant-dashboard');
        } else if (user.role === 'employer') {
          navigate('/employer-dashboard');
        } else if (user.role === 'admin') {
          navigate('/admin-dashboard');
        }
        
        // Close modal
        const modalshow = document.getElementById('loginModal');
        if (modalshow) {
          const closeButton = modalshow.querySelector('[data-bs-dismiss="modal"]');
          if (closeButton) {
            closeButton.click();
          }
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const hasNavigated = useRef(false);

  // useEffect(() => {
  //   // Only run navigation if redirects are needed
    
  // }, [isAuthenticated, user, navigate, shouldRedirect]);
  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content loginmodal-content">
          <div className="modal-header">
            {/* <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="login-text text-center">
                <p className='display-3'>Hi, Welcome Back</p>
                <p className='fw-lighter'>Still do not have an account? <a href="/register" className='fw-normal text-decoration-none signup-btn'>Sign up</a> </p>
              </div>
              <form className='container' onSubmit={handleLogin}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email*</label>
                  <input
                    type="email"
                    className="form-control login-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group pt-4">
                  <label for="exampleInputPassword1">Password*</label>
                  <input
                    type="password"
                    className="form-control login-input"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div class="form-group form-check my-3 col-lg-6 col-md-6 col-sm-6">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <a href="" className='text-decoration-none'>
                      <p className='mb-0 text-dark text-end'>forgot password?</p>
                    </a>
                  </div>
                </div>
                {
                  loading && (
                    <div className="text-center">
                      <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )
                }
                <button type="submit" class="btn text-light w-100 login-submit">Submit</button>
                <div class="d-flex align-items-center mt-4 mb-3 ">
                  <div class="line"></div><span class="pe-3 ps-3">OR</span><div class="line"></div>
                </div>
                {/* <div className="d-flex row text-center justify-content-between">
                  <div className=" col-sm-12 col-md-5 col-lg-6 card social-login p-4 d-flex align-items-center justify-content-center mb-3">
                    <a href="#" className="text-dark text-decoration-none d-flex align-items-center">
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-brands fa-google me-2" style={{ color: '#122620' }}></i>
                        Login with Google
                      </p>
                    </a>
                  </div>

                  <div className=" col-sm-12 col-md-5 col-lg-6 card social-login p-4 d-flex align-items-center justify-content-center mb-3">
                    <a href="#" className="text-dark text-decoration-none d-flex align-items-center">
                      <p className="mb-0 d-flex align-items-center">
                        <i className="fa-brands fa-facebook me-2" style={{ color: '#122620' }}></i>
                        Login with Facebook
                      </p>
                    </a>
                  </div>
                </div> */}
                <div className='text-center'>
                  <p className='fs-5 fw-lighter'>dont have an account <a href="/register" className='fw-normal text-decoration-none signup-btn'>sign up</a></p>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
