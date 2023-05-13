import { Injectable } from '@nestjs/common';
import { Airport } from './models/airport.model';

import * as airports from '../mock/airports.json';
import * as airportsMain from '../mock/airports-main.json';

@Injectable()
export class AirportService {
  getAll(): Airport[] {
    return airports;
  }

  getAllBySearch(name?: string): Airport[] {
    if (!name) return airportsMain;

    const nameToLC = name.toLowerCase();
    return airports
      .filter(
        (airport) =>
          airport.city.toLocaleLowerCase().includes(nameToLC) ||
          airport.country.toLocaleLowerCase().includes(nameToLC) ||
          airport.key.toLocaleLowerCase().includes(nameToLC) ||
          airport.name.toLocaleLowerCase().includes(nameToLC),
      )
      .slice(0, 10);
  }
}
