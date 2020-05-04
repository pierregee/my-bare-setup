import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useLogin from "../../api/mutations/login";

const LoginView = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [login] = useLogin();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleLogin = async () => {
    try {
      await login({ variables: { ...values } });
      history.push("/me");
    } catch (err) {}
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginView;
