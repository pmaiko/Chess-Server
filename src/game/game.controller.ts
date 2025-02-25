import { Controller, Get } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';

@Controller('/api/game')
export class GameController {
  constructor(private storageService: StorageService) {}
  @Get('/status')
  get(): string {
    this.storageService.set('status' + Math.random(), 1);

    return JSON.stringify(this.storageService.getAll());
  }
}
