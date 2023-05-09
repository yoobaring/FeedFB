import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Loading from '../../components/Loading'
import { Btn_text } from '../../components/Botton'
import { setCredentials } from '../../app/api/authSlice'

const Signup = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpwd, setConfirmpwd] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
    }, [email, password, confirmpwd])

    const checkPasswordMatch = (password, confirmpwd) => {
        return password === confirmpwd
      }

    const handleSubmit = async (e) => {
          e.preventDefault()

          if (!checkPasswordMatch(password, confirmpwd)) {
            window.alert("รหัสผ่านไม่ตรงกัน กรุณากรอกรหัสผ่านใหม่อีกครั้ง")
            return
          }        
  
          try {
              dispatch(setCredentials({ email, password }))
              sessionStorage.setItem("password", password);
              sessionStorage.setItem("email", email)
              setEmail('')
              setPassword('')
              setConfirmpwd('')
              navigate('/dashboard')
          } catch (err) {
              if (!err?.originalStatus) {
                  window.alert('No Server Response');
              } else if (err.originalStatus === 400) {
                  window.alert('Missing Username or Password');
              } else if (err.originalStatus === 401) {
                  window.alert('Unauthorized');
              } else {
                  window.alert('Signup Failed');
              }
              errRef.current.focus();
          }
      }

    const handleUserInput = (e) => setEmail(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleConfirmPwdInput = (e) => setConfirmpwd(e.target.value)

    const content = (
        <section className="container-fluid position-relative d-flex p-0">
        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
        <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
              <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <form onSubmit={handleSubmit} className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                          <a>
                                <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>FACEBOOK</h3>
                          </a>
                          <h3>Sign Up</h3>
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
                          <div className="form-floating mb-3">
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
                          <div className="form-floating mb-4">
                          <input 
                                type="password" 
                                className="form-control" 
                                id="floatingConfirmpwd" 
                                placeholder="ConfirmPassword"
                                onChange={handleConfirmPwdInput}
                                value={confirmpwd}
                                required
                          />
                          <label htmlFor="floatingConfirmpwd">Confirm Password</label>
                          </div>
                          <button className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                          <p className="text-center mb-0">Already have an Account <Btn_text title={`Sign In`} link={`/`}/></p>
                    </form>
              </div>
        </div>
        </div>
        </section>
  )
  return content
}
export default Signup