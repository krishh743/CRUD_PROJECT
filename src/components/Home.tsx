import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      <div
        style={{
          margin: "10%",
          backgroundColor: "ButtonShadow",
          height: "50vh",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "350px",
        }}
      >
        <h2
          style={{ marginRight: "-280px", marginLeft: "200px", color: "white" }}
        >
        CRUD OPERATION
        </h2>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{
            height: "50%",
            width: "50%",
            fontSize: "40px",
            marginTop: "90px",
            marginRight: "150px",
          }}
        >
          <Link to="/create">ENTER</Link>
        </Button>
      </div>
    </>
  );
}
export default Home;
