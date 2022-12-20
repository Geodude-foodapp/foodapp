import * as dotenv from 'dotenv';
import postgres from 'postgres';
dotenv.config();
// function to run our test query on db
const testQuery = async () => {
  console.log(process.env.PG_URI);
  const sql = postgres(process.env.PG_URI as string);
  try {
    // open transaction
    return await sql.begin(async sql => {
      await sql`TRUNCATE TABLE users;`
      await sql`insert into users (name, password)
      values ('steeb2', 'test');`
      const users = await sql`SELECT * from users;`
      await sql`ROLLBACK TRANSACTION;`
      return users;
      // return await sql`
      // TRUNCATE TABLE users;
      // insert into users (name, password)
      // values ('steeb2', 'test');
      // SELECT * from users;
      // ROLLBACK TRANSACTION;
      // `
    });
  } finally {
    await sql.end()
  }
}

it('should return users', async () => {
  const users = await testQuery();
  expect(users).toContain('steeb2');
})

