const createCandidatesTable = `
CREATE TABLE IF NOT EXISTS candidates (
  id SERIAL PRIMARY KEY,
  years_of_experience_abroad NUMERIC,
  years_of_experience_country NUMERIC,
  qualification VARCHAR(255),
  mobile VARCHAR(20),
  religion VARCHAR(50),
  gender VARCHAR(10),
  skills TEXT[],
  occupation VARCHAR(255),
  marital_status VARCHAR(20),
  dob DATE,
  first_name VARCHAR(100),
  middle_name VARCHAR(100),
  last_name VARCHAR(100),
  status VARCHAR(20),
  passport_number VARCHAR(20),
  passport_issue_date DATE,
  passport_expiration_date DATE,
  passport_issue_place VARCHAR(255),
  country VARCHAR(50),
  region VARCHAR(50),
  address VARCHAR(255),
  emergency_contact_name VARCHAR(100),
  emergency_contact_kinship VARCHAR(50),
  emergency_contact_mobile VARCHAR(20),
  emergency_contact_address VARCHAR(255),
  dalala VARCHAR(255),
  sub_dalala VARCHAR(255),
  saudi_dalala VARCHAR(255),
  saudi_sub_dalala VARCHAR(255),
  unreserved_time DATE,
  profile_photo VARCHAR(255),
  full_body_photo VARCHAR(255),
  passport_photo VARCHAR(255)
);

`;

export default createCandidatesTable;
