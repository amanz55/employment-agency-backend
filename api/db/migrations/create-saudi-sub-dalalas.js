const createSaudiSubDalalasTable = `
CREATE TABLE IF NOT EXISTS saudi_sub_dalalas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    mobile VARCHAR(20),
    partner VARCHAR(20)
);

`;

export default createSaudiSubDalalasTable;
