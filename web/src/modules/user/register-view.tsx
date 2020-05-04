import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useRegister from "../../api/mutations/register";

const RegisterView = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [register] = useRegister();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleRegister = async () => {
    try {
      await register({ variables: { ...values } });
      history.push("/login");
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
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterView;
