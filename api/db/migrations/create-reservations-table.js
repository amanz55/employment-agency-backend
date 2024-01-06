const createReservationsTable = `
CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    customer_mobile VARCHAR(20),
    customer_visa VARCHAR(255),
    customer_email VARCHAR(255),
    candidate_passport_number VARCHAR(50),
    candidate_name VARCHAR(50),
    reservation_status VARCHAR(20)
);

`;

export default createReservationsTable;
