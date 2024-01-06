const createAdminsTable = `
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    user_name VARCHAR(50),
    password VARCHAR(255),
    mobile VARCHAR(20),
    roles TEXT[],
    status VARCHAR(20)
);

`;

export default createAdminsTable;
