import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SearchFlights } from './models/search.model';
import { Flight } from './models/flight.model';

import { FlightsService } from './flights.service';

@Controller('flights')
@ApiTags('Flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @ApiOperation({ summary: 'Search Flights' })
  @ApiResponse({ status: 201, type: [Flight] })
  @Post('')
  search(@Body() flights: SearchFlights): Flight[] {
    return this.flightsService.searchFlight(flights);
  }
}
