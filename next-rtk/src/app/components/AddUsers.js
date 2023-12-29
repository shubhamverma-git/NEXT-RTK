"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch(addUser(name));
  };
  return (
    <div className="add_user">
      <h1>Add User</h1>
      <input
        className="add_user_input"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add New User"
      />
      <button onClick={userDispatch} className="add_user_btn">
        Add User
      </button>
    </div>
  );
}

export default AddUsers;
