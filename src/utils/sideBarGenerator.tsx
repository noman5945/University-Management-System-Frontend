import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSideBar = {
  key: string;
  label: ReactNode;
  children?: TSideBar[];
};

type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};

export const generateSidebars = (items: TUserPaths[], role: string) => {
  const sidebar = items.reduce((acc: TSideBar[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebar;
};
