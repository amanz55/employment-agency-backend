import db from "../db";
import hashPassword from "../utils/hash-password.js";
const createAdmin = async ({
  first_name,
  last_name,
  user_name,
  password,
  mobile,
  roles,
  status,
}) => {
  try {
    const query = `
      INSERT INTO admins (
        first_name,
        last_name,
        user_name,
        password,
        mobile,
        roles,
        status
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
      ) RETURNING *;
    `;

    const values = [
      first_name,
      last_name,
      user_name,
      await hashPassword(password.toString()),
      mobile,
      roles,
      status, // Assuming roles is an array of strings
    ];
    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error("Error in createAdmin:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
};

const findOne = async (user_name) => {
  try {
    const query = `
      SELECT * FROM admins
      WHERE user_name = $1
    ;`;

    const result = await db.query(query, [user_name]);

    console.log("Query Result:", result.rows);

    return result.rows[0];
  } catch (error) {
    console.error("Error in findOne:", error);
    throw error;
  }
};

const findAll = async () => {
  try {
    const query = `
        SELECT * FROM
            admins
    ;`;

    const result = await db.query(query);

    return result.rows;
  } catch (error) {
    console.error("Error in findAll:", error);
    throw error;
  }
};

const updateAdmin = async (
  id,
  { first_name, last_name, user_name, password, mobile, roles, status }
) => {
  try {
    const query = `
      UPDATE admins
      SET
        first_name = $2,
        last_name = $3,
        user_name = $4,
        password = $5,
        mobile = $6,
        roles = $7,
        status = $8
      WHERE
        id = $1
      RETURNING *;
    `;

    const values = [
      +id,
      first_name,
      last_name,
      user_name,
      password,
      mobile,
      roles,
      status, // Assuming roles is an array of strings
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error("Error in updateAdmin:", error);
    throw error;
  }
};

const deleteOne = async (id) => {
  try {
    const query = `
        DELETE FROM
            admins
        WHERE
            id = $1
        RETURNING *
    ;`;
    console.log(id);
    const result = await db.query(query, [+id]);

    return result.rows[0];
  } catch (error) {
    console.error("Error in deleteOne:", error);
    throw error;
  }
};

export default {
  createAdmin,
  findOne,
  findAll,
  updateAdmin,
  deleteOne,
};
