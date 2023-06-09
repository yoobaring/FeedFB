import { useLocation, Navigate, Outlet } from "react-router-dom"

const RequireAuth = () => {
    const token = sessionStorage.getItem('password')
    const location = useLocation()

    return (
        token === 'admin12345'
            ?  <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )
}
export default RequireAuth