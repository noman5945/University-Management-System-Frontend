import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/features/auth/authSlice";

const { Header, Content, Footer } = Layout;

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogOut}>Log Out</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
