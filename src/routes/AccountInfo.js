import React from "react";
import "../styles/scss/AccountInfo.scss";

function Account() {
  return (
    <div className="account">
      <div className="center">
        <form>
          <div className="accountInfoForm">
            <input placeholder="이름" />
            <input placeholder="아이디" />
            <input placeholder="닉네임" />
            <input placeholder="이메일" />
            <input placeholder="전화번호" />
            <button className="infoSubmitBtn" type="submit">
              수정하기
            </button>
            <button className="infoSubmitBtn" type="submit">
              탈퇴하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
