import React from "react";
import "../styles/scss/AccountInfo.scss";

function Account() {
  return (
    <div className="account">
      <div className="center">
        <h3 className="title">회원 정보 수정</h3>
        <form>
          <div className="form">
            <input placeholder="이름" />
            <input placeholder="아이디" />
            <input placeholder="닉네임" />
            <input placeholder="이메일" />
            <input placeholder="전화번호" />
            <input type="submit" value="수정하기" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
