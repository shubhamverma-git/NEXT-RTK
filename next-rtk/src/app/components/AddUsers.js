"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, addUserActions } from "../redux/slice";

function AddUsers() {
  const [name, setName] = useState("");
  const users = useSelector((state) => state.users);
  // console.log(users);
  const dispatch = useDispatch();
  // const userDispatch = () => {
  //   console.log(name);
  //   dispatch(addUser(name));
  // };
  return (
    <div className="add_user">
      <h1>Add User</h1>
      <input
        className="add_user_input"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add New User"
      />
      {/* <button onClick={userDispatch} className="add_user_btn"> */}
      <button
        onClick={() => dispatch(addUserActions.addUser([...users, name]))}
        className="add_user_btn"
      >
        Add User
      </button>
    </div>
  );
}

export default AddUsers;
