/**
 * Importing npm packages
 */
import { NestFactory } from '@nestjs/core';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */
import { AppModule } from './app.module';

/**
 * Declaring the constants
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}

bootstrap();
