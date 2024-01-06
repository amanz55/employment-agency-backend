import db from "../db";
import sendEmail from "../utils/send-email";

const createCandidate = async ({
  years_of_experience_abroad,
  years_of_experience_country,
  qualification,
  mobile,
  religion,
  gender,
  skills,
  occupation,
  marital_status,
  dob,
  first_name,
  middle_name,
  last_name,
  status,
  passport_number,
  passport_issue_date,
  passport_expiration_date,
  passport_issue_place,
  country,
  region,
  address,
  emergency_contact_name,
  emergency_contact_kinship,
  emergency_contact_mobile,
  emergency_contact_address,
  dalala,
  sub_dalala,
  saudi_dalala,
  saudi_sub_dalala,
  unreserved_time,
  profile_photo,
  full_body_photo,
  passport_photo,
}) => {
  try {
    const query = `
      INSERT INTO candidates (
        years_of_experience_abroad,
        years_of_experience_country,
        qualification,
        mobile,
        religion,
        gender,
        skills,
        occupation,
        marital_status,
        dob,
        first_name,
        middle_name,
        last_name,
        status,
        passport_number,
        passport_issue_date,
        passport_expiration_date,
        passport_issue_place,
        country,
        region,
        address,
        emergency_contact_name,
        emergency_contact_kinship,
        emergency_contact_mobile,
        emergency_contact_address,
        dalala,
        sub_dalala,
        saudi_dalala,
        saudi_sub_dalala,
        unreserved_time,
        profile_photo,
        full_body_photo,
        passport_photo
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33
      ) RETURNING *;
    `;

    const values = [
      years_of_experience_abroad,
      years_of_experience_country,
      qualification,
      mobile,
      religion,
      gender,
      skills,
      occupation,
      marital_status,
      dob,
      first_name,
      middle_name,
      last_name,
      status,
      passport_number,
      passport_issue_date,
      passport_expiration_date,
      passport_issue_place,
      country,
      region,
      address,
      emergency_contact_name,
      emergency_contact_kinship,
      emergency_contact_mobile,
      emergency_contact_address,
      dalala,
      sub_dalala,
      saudi_dalala,
      saudi_sub_dalala,
      unreserved_time,
      profile_photo,
      full_body_photo,
      passport_photo,
    ];

    const result = await db.query(query, values);
    sendEmail("amanuelalemayehu1241@gmail.com", -1, "Admin notification!");
    return result.rows[0];
  } catch (error) {
    console.error("Error in createCandidate:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
};

const findOne = async (id) => {
  try {
    const query = `
      SELECT * FROM
        candidates
      WHERE
        id = $1
    ;`;
    const result = await db.query(query, [id]);

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
        candidates
    ;`;

    const result = await db.query(query);

    return result.rows;
  } catch (error) {
    console.error("Error in findAll:", error);
    throw error;
  }
};

const updateCandidate = async (
  id,
  {
    years_of_experience_abroad,
    years_of_experience_country,
    qualification,
    mobile,
    religion,
    gender,
    skills,
    occupation,
    marital_status,
    dob,
    first_name,
    middle_name,
    last_name,
    status,
    passport_number,
    passport_issue_date,
    passport_expiration_date,
    passport_issue_place,
    country,
    region,
    address,
    emergency_contact_name,
    emergency_contact_kinship,
    emergency_contact_mobile,
    emergency_contact_address,
    dalala,
    sub_dalala,
    saudi_dalala,
    saudi_sub_dalala,
    unreserved_time,
    profile_photo,
    full_body_photo,
    passport_photo,
  }
) => {
  try {
    const query = `
      UPDATE candidates
      SET
        years_of_experience_abroad = $2,
        years_of_experience_country = $3,
        qualification = $4,
        mobile = $5,
        religion = $6,
        gender = $7,
        skills = $8,
        occupation = $9,
        marital_status = $10,
        dob = $11,
        first_name = $12,
        middle_name = $13,
        last_name = $14,
        status = $15,
        passport_number = $16,
        passport_issue_date = $17,
        passport_expiration_date = $18,
        passport_issue_place = $19,
        country = $20,
        region = $21,
        address = $22,
        emergency_contact_name = $23,
        emergency_contact_kinship = $24,
        emergency_contact_mobile = $25,
        emergency_contact_address = $26,
        dalala = $27,
        sub_dalala = $28,
        saudi_dalala = $29,
        saudi_sub_dalala = $30,
        profile_photo = $31,
        full_body_photo = $32,
        passport_photo = $33
      WHERE
        id = $1
      RETURNING *;
    `;

    const values = [
      +id,
      years_of_experience_abroad,
      years_of_experience_country,
      qualification,
      mobile,
      religion,
      gender,
      skills,
      occupation,
      marital_status,
      dob,
      first_name,
      middle_name,
      last_name,
      status,
      passport_number,
      passport_issue_date,
      passport_expiration_date,
      passport_issue_place,
      country,
      region,
      address,
      emergency_contact_name,
      emergency_contact_kinship,
      emergency_contact_mobile,
      emergency_contact_address,
      dalala,
      sub_dalala,
      saudi_dalala,
      saudi_sub_dalala,
      unreserved_time,
      profile_photo,
      full_body_photo,
      passport_photo,
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error("Error in updateCandidate:", error);
    throw error;
  }
};

const deleteOne = async (id) => {
  try {
    const query = `
      DELETE FROM
        candidates
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
  createCandidate,
  findOne,
  findAll,
  updateCandidate,
  deleteOne,
};
