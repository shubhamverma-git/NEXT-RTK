import React from "react";

function AddUsers() {
  return (
    <div className="add_user">
      <h1>Add User</h1>
      <input
        className="add_user_input"
        type="text"
        placeholder="Add New User"
      />
      <button className="add_user_btn">Add User</button>
    </div>
  );
}

export default AddUsers;
