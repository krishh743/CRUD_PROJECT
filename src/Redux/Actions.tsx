import * as types from "./ActionTypes";
import axios from "axios";
// import {ADD_USER_START,ADD_USER_SUCCESS,ADD_USER_ERROR}  from './ActionTypes'

const getUsers = (users: any) => ({
  type: types.ADD_USER_START,
  payload: users,
});

const userDeleted = () => ({
  type: types.USER_DELETE,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userEdited = (user: any) => ({
  type: types.GET_USER_EDIT,
  payload: user,
});

const userUpdated=()=>({
  type:types.GET_USER_UPDATED,
})

export const loadUsers = () => {
  return function (dispatch: any) {
    console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//delete data with the help of redux
export const deleteUser = (id: any) => {
  return function (dispatch: any) {
    console.log(process.env.REACT_APP_API);
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user: any) => {
  return function (dispatch: any) {
    console.log(process.env.REACT_APP_API);
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
        // dispatch(loadUsers())
      })
      .catch((error) => console.log(error));
  };
};

export const editUser = (id: any) => {
  return function (dispatch: any) {
    // console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userEdited(resp.data));
        // dispatch(loadUsers())
      })
      .catch((error) => console.log(error));
  };
};
export const userUpdate = (id: any, user : any) => {
  return function (dispatch: any) {
    // console.log(process.env.REACT_APP_API);
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userUpdated());
        // dispatch(loadUsers())
      })
      .catch((error) => console.log(error));
  };
};
