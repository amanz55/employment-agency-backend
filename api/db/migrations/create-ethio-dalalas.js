const createEthioDalalasTable = `
CREATE TABLE IF NOT EXISTS ethio_dalalas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    mobile VARCHAR(20),
    partner VARCHAR(20)
);

`;

export default createEthioDalalasTable;
