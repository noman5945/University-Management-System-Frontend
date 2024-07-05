import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to={`/login`} />;
  }
  return children;
};
