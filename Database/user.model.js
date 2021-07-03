/* user model dependencies */
import connection from "./dbConnection";

/* Users initialization */
let Users;

/* fetch all users from users table */
const fetchAllUsers = async () => {
  try {
    const rawUsersData = await connection.query("SELECT * FROM users");
    const allUsers = rawUsersData.rows;
    Users = allUsers;
  } catch (err) {
    console.error(err);
  }
};

fetchAllUsers();

/* export Users */
export default Users;
