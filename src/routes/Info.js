import React from "react";
import { Link } from "react-router-dom";
import "../styles/scss/Info.scss";

function Info() {
  return (
    <>
      <nav className="infoNav">
        <Link className="homeBtn" to="/">
          Doge-Web
        </Link>
        <Link className="menuBtn" to="/">
          홈
        </Link>
        <Link className="menuBtn" to="/accountInfo">
          회원 정보
        </Link>
        <Link className="menuBtn" to="/account?register=customer">
          회원가입
        </Link>
        <Link className="menuBtn" to="/login">
          로그인
        </Link>
      </nav>
    </>
  );
}

export default Info;
