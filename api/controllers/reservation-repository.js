import db from "../db";

const createReservation = async ({
  customer_name,
  customer_mobile,
  customer_visa,
  customer_email,
  candidate_passport_number,
  candidate_name,
  reservation_status,
}) => {
  try {
    const query = `
      INSERT INTO reservations (
        customer_name,
        customer_mobile,
        customer_visa,
        customer_email,
        candidate_passport_number,
        candidate_name,
        reservation_status
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
      ) RETURNING *;
    `;

    const values = [
      customer_name,
      customer_mobile,
      customer_visa,
      customer_email,
      candidate_passport_number,
      candidate_name,
      reservation_status,
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.log(
      customer_name,
      customer_mobile,
      customer_visa,
      customer_email,
      candidate_passport_number,
      candidate_name,
      reservation_status
    );
    // console.error("Error in createReservation:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
};

const findOne = async (id) => {
  try {
    const query = `
      SELECT * FROM
        reservations
      WHERE
        id = $1
    ;`;

    const result = await db.query(query, [+id]);

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
        reservations
    ;`;

    const result = await db.query(query);

    return result.rows;
  } catch (error) {
    console.error("Error in findAll:", error);
    throw error;
  }
};

const updateReservation = async (
  id,
  {
    customer_name,
    customer_mobile,
    customer_visa,
    candidate_passport_number,
    reservation_status,
  }
) => {
  try {
    const query = `
      UPDATE reservations
      SET
        customer_name = $2,
        customer_mobile = $3,
        customer_visa = $4,
        candidate_passport_number = $5,
        reservation_status = $6
      WHERE
        id = $1
      RETURNING *;
    `;

    const values = [
      +id,
      customer_name,
      customer_mobile,
      customer_visa,
      candidate_passport_number,
      reservation_status,
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error("Error in updateReservation:", error);
    throw error;
  }
};

const deleteOne = async (id) => {
  try {
    const query = `
      DELETE FROM
        reservations
      WHERE
        id = $1
      RETURNING *
    ;`;

    const result = await db.query(query, [+id]);

    return result.rows[0];
  } catch (error) {
    console.error("Error in deleteOne:", error);
    throw error;
  }
};

export default {
  createReservation,
  findOne,
  findAll,
  updateReservation,
  deleteOne,
};
