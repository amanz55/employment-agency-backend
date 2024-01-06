import db from "..";
import createAdminsTable from "./create-admins-table";
import createCandidatesTable from "./create-candidates-table";
import createReservationsTable from "./create-reservations-table";
import createEthioDalalasTable from "./create-ethio-dalalas";
import createEthioSubDalalasTable from "./create-ethio-sub-dalalas";
import createSaudiDalalasTable from "./create-saudi-dalalas";
import createSaudiSubDalalasTable from "./create-saudi-sub-dalalas";

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
