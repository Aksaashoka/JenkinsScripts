const { Pool } = require('pg');
const QueryMaster = async () => {
  const connectionObject = {
    user: process.env.PG_CREDS_USR,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_CREDS_PSW,
  };
  try {
    const pool = new Pool(connectionObject);
    const query = `SELECT * FROM public.user WHERE id='${process.env.user_id}'`;
    const result = await pool.query(query);
    result.rows.forEach((element) => {
      console.table(element);
    });
    console.log(JSON.stringify(result.rows));
  } catch (error) {
    if(error)console.log(error)
  }
  return result;
};
QueryMaster();
