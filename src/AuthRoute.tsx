import { FC } from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";

type AuthRouteProps = { user: String; children: JSX.Element };

const AuthRoute: FC<AuthRouteProps> = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default withUser(AuthRoute);