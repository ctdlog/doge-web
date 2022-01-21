import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../styles/scss/Home.scss";

function Home() {
  // const getFunc = async () => {
  //   const response = await axios.get("https://donghs1541.ddns.net:8081/");
  //   console.log(response);
  // };

  // useEffect(() => {
  //   getFunc();
  // }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://doge-shopping-api.herokuapp.com/"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="background">
      <div className="background-content">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </div>
  );
}

export default Home;
