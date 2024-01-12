//use this code in the front end to update data

updateUser(userId, {
  username: "newUsername",
  email: "newEmail@example.com",
  password: "newPassword", // Consider handling password updates carefully
  role_id: newRoleId,
  usr_stat_id: newUserStatusId,
})
  .then((response) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
