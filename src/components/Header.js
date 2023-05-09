import { FaBars, FaBell } from 'react-icons/fa'
import { menu } from '../mockdata'
import { Calendar } from './Date'
import { Link, useNavigate } from 'react-router-dom';
import { logOut} from '../app/api/authSlice';
import { useDispatch } from 'react-redux'
import { Search } from './Form';
import { FiLogOut } from 'react-icons/fi';


export const Navbar = ({location, isOpen}) => {
      const lo = location
      const email = sessionStorage.getItem('email').split('@')[0]

      
      const content = (

              <div>
                  <div className={`sidebar ${isOpen ? "open" : ""}`} >
                        <nav className="navbar bg-secondary navbar-dark">
                        <a className="navbar-brand mx-4 mb-3">
                              <h4 className="text-primary">
                                    <i className="me-2">
                                          <img className="rounded-circle" src="img/user.jpg" alt style={{width: 35, height: 35}} />
                                    </i>{email}                             
                              </h4>
                        </a>
                        <div className="navbar-nav w-100">
                              {menu.map((menu, i) => {
                                    return <Link key={i} to={menu.path}><a key={i} className={`nav-item nav-link ${lo == menu.path ?'active' : null}`}><i className='fa me-2'>{menu.icon}</i>{menu.lable}</a></Link>
                              })}
                        </div>
                        </nav>
                  </div>
              </div>
      )
      return content
  }



export const Header = ({location,  onChange=()=>{}, handle}) => {
      const lo = location
      const dispatch = useDispatch()
      const email = sessionStorage.getItem('email')
      const navigate = useNavigate()

      const Logout = () => {
      dispatch(logOut())
        navigate('/')
      }
      const content = (

              <div> 
                      <div className="navbar-nav align-items-center ms-auto">
                            <div className="nav-item dropdown">
                            <div onClick={handle}>
                                    <Search onChange={(e) => { onChange(e) }}/>
                              </div>
                            </div>

                            <div className="nav-item dropdown">
                                  <a href="#" className="nav-link" onClick={Logout}>
                                        <span className="d-none d-lg-inline-flex"><button className="dropdown-item"><FiLogOut size={22} color='#1E90FF'/> Log Out</button></span>
                                  </a>
                            </div>
                      </div>
              </div>
      )
      return content
  }
