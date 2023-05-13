import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AirportService } from './airports.service';

import { Airport } from './models/airport.model';

@Controller('airports')
@ApiTags('Airport')
export class AirportController {
  constructor(private airportService: AirportService) {}

  @ApiOperation({ summary: 'Get All Airport' })
  @ApiResponse({ status: 201, type: [Airport] })
  @Get('')
  getAll(): Airport[] {
    return this.airportService.getAll();
  }

  @ApiOperation({ summary: 'Search Airports' })
  @ApiResponse({ status: 201, type: Airport })
  @ApiQuery({
    name: 'q',
    description:
      'Search string for searching airports (/search/airport?q=Amste)',
    example: 'Amste',
  })
  @Get('search')
  getAllBySearch(@Query() params: { q: string }): Airport[] {
    return this.airportService.getAllBySearch(params.q);
  }
}
