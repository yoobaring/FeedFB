import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../app/api/authSlice'
import { Btn_text } from '../../components/Botton'

const Signin = () => {
      const userRef = useRef()
      const errRef = useRef()
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const navigate = useNavigate()
      const dispatch = useDispatch()
  
      useEffect(() => {
          userRef.current.focus()
      }, [])
  
      useEffect(() => {
      }, [email, password])

      const handleSubmit = async (e) => {
            e.preventDefault()
    
            try {
                  dispatch(setCredentials({ email, password }))
                  sessionStorage.setItem("password", password);
                  sessionStorage.setItem("email", email)
                  setEmail('')
                  setPassword('')
                  navigate('/dashboard')
            } catch (err) {
                if (!err?.originalStatus) {
                    window.alert('No Server Response');
                } else if (err.originalStatus === 400) {
                    window.alert('Missing Username or Password');
                } else if (err.originalStatus === 401) {
                    window.alert('Unauthorized');
                } else {
                    window.alert('Login Failed');
                }
                errRef.current.focus();
            }
        }

      const handleUserInput = (e) => setEmail(e.target.value)
      const handlePwdInput = (e) => setPassword(e.target.value)

      const content = (
            <section className="container-fluid position-relative d-flex p-0">
            <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                  <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form onSubmit={handleSubmit} className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                              <a>
                                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>FACEBOOK</h3>
                              </a>
                              <h3>Sign In</h3>
                              </div>
                              <div className="form-floating mb-3">
                              <input 
                                    type="email" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="name@example.com"
                                    ref={userRef}
                                    value={email}
                                    onChange={handleUserInput}
                                    autoComplete="off"
                                    required
                              />
                              <label htmlFor="floatingInput">Email address</label>
                              </div>

                              <div className="form-floating mb-4">
                              <input 
                                    type="password" 
                                    className="form-control" 
                                    id="floatingPassword" 
                                    placeholder="Password"
                                    onChange={handlePwdInput}
                                    value={password}
                                    required
                              />
                              <label htmlFor="floatingPassword">Password</label>
                              </div>

                              <div className="d-flex align-items-center justify-content-between mb-4">
                              <Btn_text title={`Forgot Password`} link={`/forgetpwd`}/>
                              </div>
                              <button className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                              <p className="text-center mb-0">Don't have an Account? <Btn_text title={`Sign Up`} link={`/signup`}/></p>
                        </form>
                  </div>
            </div>
            </div>
            </section>
      )
      return content
}
export default Signin