import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
// import CryptoJS from "crypto-js";
// import { useHistory } from "react-router-dom";
import "../styles/scss/Login.scss";

function Login() {
  const history = useHistory();

  const [loginId, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const SERVER_API = `${process.env.REACT_APP_SERVER_API}`;
  const SERVER_API = "https://doge-shopping-api.herokuapp.com";
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
    <div className="login-container">
      <img
        src="https://static01.nyt.com/images/2021/05/16/fashion/13DOGECOIN-1/13DOGECOIN-1-mediumSquareAt3X.jpg"
        alt="도지"
      />
      <form action="/" className="login-form">
        <div className="input-box">
          <input type="text" placeholder="ID" onChange={onIdChangeHandler} />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={onPasswordChangeHandler}
          />
        </div>
        <div className="submitBtnForm">
          <button className="submitBtn" type="submit" onClick={onSubmitHandler}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
