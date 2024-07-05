import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { setUser } from "../redux/features/auth/authSlice";

export const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { error, data }] = useLoginMutation();
  console.log("data", data);
  console.log("error", error);
  const onSubmit = async (data: any) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();

    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, accessToken: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};
