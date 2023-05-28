import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import databaseOptions from './database-options';
import { ConfigModule } from '@nestjs/config';
import { FlightsModule } from './flights/flights.module';
import { AirportModule } from './airports/airports.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(databaseOptions()),
    AuthModule,
    AirportModule,
    FlightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
