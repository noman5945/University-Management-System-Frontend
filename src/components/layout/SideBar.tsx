import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { generateSidebars } from "../../utils/sideBarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { studentPaths } from "../../routes/student.routes";
import { facultyPaths } from "../../routes/faculty.routes";

const USER_ROLE = {
  ADMIN: "admin",
  STUDENT: "student",
  FACULTY: "faculty",
};

export const SideBar = () => {
  const role = "admin";
  let sideBarItems;
  switch (role) {
    case USER_ROLE.ADMIN:
      sideBarItems = generateSidebars(adminPaths, USER_ROLE.ADMIN);
      break;
    case USER_ROLE.STUDENT:
      sideBarItems = generateSidebars(studentPaths, USER_ROLE.STUDENT);
      break;
    case USER_ROLE.FACULTY:
      sideBarItems = generateSidebars(facultyPaths, USER_ROLE.FACULTY);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{ color: "white", padding: "4px", height: "4rem" }}
        className="demo-logo-vertical"
      >
        <h3>University Management System</h3>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};
