import { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return children;
};
