import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Este es el endpoint raíz de mi proyecto';
  }

  @Get('nuevo')
  newEndpoint(): string {
    return 'Yo soy el nuevo endpoint'
  }

}
