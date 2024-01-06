import db from "..";
import createAdminsTable from "./create-admins-table.js";
import createCandidatesTable from "./create-candidates-table.js";
import createReservationsTable from "./create-reservations-table.js";
import createEthioDalalasTable from "./create-ethio-dalalas.js";
import createEthioSubDalalasTable from "./create-ethio-sub-dalalas.js";
import createSaudiDalalasTable from "./create-saudi-dalalas.js";
import createSaudiSubDalalasTable from "./create-saudi-sub-dalalas.js";

const runDbMigrations = async () => {
  console.log("BEGIN DB MIGRATION");

  // use single client forn transactions
  const client = await db.connect();

  try {
    await client.query("BEGIN"); // begin transaction

    await client.query(createAdminsTable);

    await client.query(createCandidatesTable);

    await client.query(createReservationsTable);

    await client.query(createEthioDalalasTable);

    await client.query(createEthioSubDalalasTable);

    await client.query(createSaudiDalalasTable);

    await client.query(createSaudiSubDalalasTable);

    await client.query("COMMIT"); // commit transaction

    console.log("END DB MIGRATION");
  } catch (e) {
    await client.query("ROLLBACK"); // rollback transaction

    console.log("DB migration failed");

    throw e;
  } finally {
    client.release();
  }
};

export default runDbMigrations;
