import { FC } from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";

type UserRouteProps = { user: String; children: JSX.Element };

const UserRoute: FC<UserRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default withUser(UserRoute);