export default ({ env }) => {
  // Отладка: выводим значения переменных
  const dbHost = env('DATABASE_HOST');
  const dbPort = env.int('DATABASE_PORT');
  const dbName = env('DATABASE_NAME');
  const dbUser = env('DATABASE_USERNAME');
  const dbPassword = env('DATABASE_PASSWORD');
  
  console.log('🔍 Database config debug:');
  console.log('  HOST:', dbHost);
  console.log('  PORT:', dbPort);
  console.log('  NAME:', dbName);
  console.log('  USER:', dbUser);
  console.log('  PASSWORD:', dbPassword ? '***' : 'undefined');
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: dbHost,
        port: dbPort,
        database: dbName,
        user: dbUser,
        password: dbPassword,
        ssl: {
          rejectUnauthorized: false,
          ca: undefined,
          key: undefined,
          cert: undefined,
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 2, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};
