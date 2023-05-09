import { useRef, useState, useEffect } from 'react'
import Loading from '../../components/Loading'
import { Btn_text } from '../../components/Botton'
import { useForgetpwdMutation } from '../../app/api/authApiSlice'
import { useNavigate } from 'react-router-dom'


const ForgetPassword = () => {
      const userRef = useRef()
      const errRef = useRef()
      const [email, setEmail] = useState('')
      const navigate = useNavigate()
      const [forgetpwd, { isLoading }] = useForgetpwdMutation()

      useEffect(() => {
          userRef.current.focus()
      }, [])
  
      useEffect(() => {
      }, [email])

      const handleSubmit = async (e) => {
            e.preventDefault()
    
            try {
                await forgetpwd({ email }).unwrap()
                setEmail('')
                window.alert('กรุณาตรวจสอบการขอรหัสผ่านทางอีเมลล์ของคุณ');
                setTimeout(()=> {
                  navigate('/')
                }, 1000)
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

      const content = isLoading ? <Loading/> : (
            <section className="container-fluid position-relative d-flex p-0">
            <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                  <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form onSubmit={handleSubmit} className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                              <a>
                                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>HAP</h3>
                              </a>
                              <h3>Forget Password</h3>
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
                              <button className="btn btn-primary py-3 w-100 mb-4">ส่ง</button>
                              <p className="text-center mb-0">Don't have an Account? <Btn_text title={`Sign Up`} link={`/signup`}/> Or <Btn_text title={`Sign in`} link={`/`}/></p>
                        </form>
                  </div>
            </div>
            </div>
            </section>
      )
      return content
}
export default ForgetPassword