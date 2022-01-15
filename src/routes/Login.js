import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
// import CryptoJS from "crypto-js";
// import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [loginId, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const SERVER_API = `${process.env.REACT_APP_SERVER_API}`;
  // const history = useHistory();

  const onIdChangeHandler = (e) => {
    setId(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // const key = CryptoJS.enc.Hex.parse(process.env.REACT_APP_SECRET_KEY);
      // const iv = CryptoJS.enc.Hex.parse(process.env.REACT_APP_IV);

      const response = await axios.post(
        `${SERVER_API}/login`,
        {
          loginId,
          password,
          // : CryptoJS.AES.encrypt(password, key, {
          //   iv,
          // }).toString(),
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.nickname);
      const { accessToken } = response.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <form action="/">
        <div className="input-box">
          <span>ID</span>
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={onIdChangeHandler}
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onPasswordChangeHandler}
          />
        </div>
        <input type="submit" value="제출하기" onClick={onSubmitHandler} />
      </form>
    </div>
  );
}

export default Login;
