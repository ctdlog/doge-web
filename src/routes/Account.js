import React, { useState } from "react";
import axios from "axios";
// import CryptoJS from "crypto-js";
import "../styles/scss/Account.scss";

function Account() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [register, setRegister] = React.useState("");

  // const onChange = (e) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   if (name==="name") {

  //   }
  // };

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  const onIdHandler = (e) => {
    setId(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onPhoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onIdCheckHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/account/check?id=${id}&register=customer`,
        { id }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const postRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 다릅니다.");
    }
    setRegister("customer");
    try {
      // const key = CryptoJS.enc.Base64.parse(process.env.REACT_APP_SECRET_KEY);
      // const iv = CryptoJS.enc.Base64.parse(process.env.REACT_APP_IV);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/account?register=customer`,
        {
          name,
          email,
          nickname,
          id,
          password,
          // : CryptoJS.AES.encrypt(password, key, { iv }).toString(),
          phoneNumber,
          register,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <h3>회원가입</h3>
      <form>
        <div className="flex">
          <ul className="container">
            <li className="item center">이름</li>
            <li className="item">
              <input
                type="text"
                name="name"
                placeholder="이름을 입력하세요."
                autofocus
                required
                onChange={onNameHandler}
              />
            </li>
          </ul>
          <ul className="container">
            <li className="item center">이메일</li>
            <li className="item">
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요."
                autofocus
                required
                onChange={onEmailHandler}
              />
            </li>
          </ul>
          <ul className="container">
            <li className="item center">닉네임</li>
            <li className="item">
              <input
                type="text"
                name="nickName"
                placeholder="닉네임을 입력하세요."
                autofocus
                required
                onChange={onNicknameHandler}
              />
            </li>
            <li className="item"></li>
          </ul>
          <ul className="container">
            <li className="item center">아이디</li>
            <li className="item">
              <input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요."
                required
                onChange={onIdHandler}
              />
            </li>
            <li className="item">
              <button className="idcheck" onClick={onIdCheckHandler}>
                중복확인
              </button>
            </li>
          </ul>
          <ul className="container">
            <li className="item center">비밀번호</li>
            <li className="item">
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요."
                required
                onChange={onPasswordHandler}
              />
            </li>
          </ul>
          <ul className="container">
            <li className="item center">비밀번호 확인</li>
            <li className="item">
              <input
                type="password"
                name="password2"
                placeholder="비밀번호를 입력하세요."
                required
                onChange={onConfirmPasswordHandler}
              />
            </li>
          </ul>
          <ul className="container">
            <li className="item center">전화번호</li>
            <li className="item">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="전화번호를 입력하세요."
                required
                onChange={onPhoneNumberHandler}
              />
            </li>
          </ul>

          <ul className="container">
            <li className="item center"></li>
            <li className="item">
              <input
                value="가입하기"
                type="submit"
                className="submit"
                onClick={(event) => postRegister(event)}
              />
            </li>
          </ul>
        </div>
      </form>
      <hr />
      <div className="loginSwitch">
        <span> Already have an account? </span>
        <a href="/login">Log in now</a> &rarr;
      </div>
      <div className="social-login">
        <i className="fab fa-github"></i>
        <a href="/"> Continue with Github</a> &rarr;
      </div>
    </div>
  );
}

export default Account;
