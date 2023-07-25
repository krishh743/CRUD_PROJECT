import React, {useEffect} from "react";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, loadUsers} from "../Redux/Actions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useNavigate} from "react-router";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Create() {
  let dispatch = useDispatch();
  let history = useNavigate();
  //destructure  the user data
  const {users} = useSelector((state: any) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
    console.log("loadusers dispatched");
  }, []);

  const handleDelete = (id: any) => {
    if (window.confirm("are you sure want to delete data ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div style={{margin: "5%", padding: "2%", backgroundColor: "gray"}}>
      <div>
        {/* <Button variant="contained">Contained</Button> */}
        <Box sx={{"& > :not(style)": {m: 1}}}>
          <Fab
            onClick={() => history("/AddUser")}
            color="secondary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
          Add User
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 500}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell align="right">email id</StyledTableCell>
              <StyledTableCell align="right">Contact number</StyledTableCell>
              <StyledTableCell align="right">address</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map(
                (user: {
                  id: React.Key | null | undefined;
                  name:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  phone:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  email:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  address:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <StyledTableRow key={user.id}>
                    <StyledTableCell component="th" scope="row">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {user.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {user.phone}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {user.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <ButtonGroup
                        style={{backgroundColor: "purple"}}
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          style={{
                            margin: "5px",
                            padding: "5px",
                            border: "1px solid black",
                            borderRadius: "5px",
                            backgroundColor: "red",
                          }}
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          style={{
                            margin: "5px",
                            padding: "5px",
                            border: "1px solid black",
                            borderRadius: "5px",
                            backgroundColor: "green",
                          }}
                          onClick={() => history(`/editUser/${user.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          style={{
                            margin: "5px",
                            padding: "5px",
                            border: "1px solid black",
                            borderRadius: "5px",
                            backgroundColor: "black",
                          }}
                        >
                          View
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
