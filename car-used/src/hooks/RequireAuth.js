import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import PropTypes from "prop-types";

const RequireAuth = ({ allowRoles }) => {
  
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role) => allowRoles?.include(role)) ? (
    <Outlet />
  ) : auth?.userId ? (
    <Navigate to="/UnAuthorize" state={{ from: location }} replace />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

RequireAuth.propTypes = {
  allowRoles: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default RequireAuth;
