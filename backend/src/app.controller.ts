/**
 * Importing npm packages
 */
import { Controller, Get } from '@nestjs/common';

/**
 * Importing user defined packages
 */
import { AppService } from './app.service';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
