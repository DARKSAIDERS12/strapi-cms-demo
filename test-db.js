const knex = require('knex');

const config = {
  client: 'postgres',
  connection: {
    host: 'db.mrcqqqdbfpyufgmochlb.supabase.co',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'dfrSdcvf!234fg',
    ssl: {
      rejectUnauthorized: false
    }
  }
};

console.log('Testing database connection...');
console.log('Config:', JSON.stringify(config, null, 2));

const db = knex(config);

db.raw('SELECT 1')
  .then(() => {
    console.log('✅ Database connection successful!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  });
