import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import RequireAuth from './features/auth/RequireAuth'
import Signin from './features/auth/Signin'
import Signup from './features/auth/Signup';
import ForgetPassword from './features/auth/Forgetpwd';
import Dashboard from './features/screen/Dashboard';
import Feed from './features/screen/Feed';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout  />}>
        {/* public routes */}
        <Route path="/" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgetpwd" element={<ForgetPassword />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/feed" element={<Feed/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
