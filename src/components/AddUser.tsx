import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {addUser} from "../Redux/Actions";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// function AddUser() {
const AddUser: React.FC = () => {
  const [add, setAdd] = useState({
    name: "",
    email: " ",
    phone: " ",
    address: "",
  });

  const [error, setError] = useState(" ");

  let history = useNavigate();

  const dispatch = useDispatch();

  const {name, email, phone, address} = add;

  // const handleInputChange  = (e: { target: { name: any; value: any } }) => {
  const handleInputChange = (e: any) => {
    // let { name, value } = e.target;
    // setAdd({ ...add, [name]: name });
    setAdd({
      ...add,
      [e.target.name]: e.target.value,
    });
  };
  // const notify = () => toast("Wow so easy!");

  const handleSubmit = (e: any) => {
    console.log("into function");
    e.preventDefault();
    if (!name || !address || !email || !phone) {
      setError("Please enter all fields");
      // toast("Please enter all fields")
      // <ToastContainer />
      // notify()

      console.log(error);
    } else {
      dispatch(addUser(add));
      history("/");
      setError(" ");
    }
  };

  return (
    <div>
      <Button
        color="secondary"
        onClick={() => history("/create")}
        variant="contained"
      >
        Go Back
      </Button>
      {error.length && <h3 style={{color: "red"}}>{error}</h3>}
      {/* <form > */}
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": {m: 1, width: "45ch"},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="User Name"
          variant="standard"
          value={name}
          type="text"
          onChange={handleInputChange}
          name="name"
        />
        <br />
        {/* <TextField id="standard-basic" label="Name" variant="standard"   value={n type="text"/> */}

        <TextField
          id="standard-basic"
          label="Email id"
          variant="standard"
          value={email}
          type="text"
          onChange={handleInputChange}
          name="email"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          value={phone}
          type="text"
          onChange={handleInputChange}
          name="phone"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address}
          type="text"
          onChange={handleInputChange}
          name="address"
        />
        <br />
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </Box>
      {/* </form> */}
    </div>
  );
};

export default AddUser;
function dispatch(arg0: JSX.Element) {
  throw new Error("Function not implemented.");
}

function state(state: any): JSX.Element {
  throw new Error("Function not implemented.");
}
