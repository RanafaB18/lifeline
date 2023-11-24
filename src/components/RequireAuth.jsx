import { Navigate, Outlet, useLocation } from "react-router-dom"
import useToken from "../hooks/useToken"

const RequireAuth = () => {
    const { tokens } = useToken()
    const location = useLocation()
  return (
    <>
        {
            tokens?.accessToken ? <Outlet /> : <Navigate to={"/signin"} state={{ whereYouWantedToGo: location }} replace />
        }
    </>
  )
}

export default RequireAuth
