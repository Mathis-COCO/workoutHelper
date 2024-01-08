import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'WorkoutUser',
  password: '12345',
  database: 'postgres',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrationHistory',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
