"use client";
import React from "react";
import { useSelector } from "react-redux";

function DisplayUsers() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="display_users">
      <div>
        {users?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default DisplayUsers;
