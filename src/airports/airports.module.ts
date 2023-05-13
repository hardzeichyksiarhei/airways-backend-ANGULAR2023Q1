import { Module } from '@nestjs/common';
import { AirportController } from './airports.controller';
import { AirportService } from './airports.service';

@Module({
  controllers: [AirportController],
  providers: [AirportService],
  exports: [AirportService],
})
export class AirportModule {}
