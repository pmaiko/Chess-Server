import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

const arr = [];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    arr.push(arr.length + 1);
    // return this.appService.getHello();
    return JSON.stringify(arr);
  }
}
