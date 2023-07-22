// app.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  getApp(): string {
    return 'Hello from the AppController!';
  }
}
