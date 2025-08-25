const knex = require('knex');

const config = {
  client: 'postgres',
  connection: {
    host: 'aws-1-ap-northeast-2.pooler.supabase.com',
    port: 6543,
    database: 'postgres',
    user: 'postgres.mrcqqqdbfpyufgmochlb',
    password: 'dfrSdcvf!234fg',
    ssl: {
      rejectUnauthorized: false,
      ca: undefined,
      key: undefined,
      cert: undefined,
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
