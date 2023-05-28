import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './auth/user.entity';

const databaseOptions = () => {
  return {
    type: 'postgres',
    // host: process.env.POSTGRES_HOST,
    // port: +process.env.POSTGRES_PORT,
    // username: process.env.POSTGRES_USERNAME,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
    autoLoadEntities: true,
    // dialectOptions: {
    //   ssl: {
    //     // require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
    ssl: true,
    url: 'postgres://wbyvskhyxyovmn:60b6bce9dad7d9d8e35f4c93883adaa519bdb4534eaa5ab2eaa70aac59c405c5@ec2-52-215-209-64.eu-west-1.compute.amazonaws.com:5432/d25bgs943p0qea',
  } as TypeOrmModuleOptions;
};

export default databaseOptions;
