/**
 * Importing npm packages
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

/**
 * Importing user defined packages
 */
import { RoutesModule } from './routes';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Module({
  imports: [ConfigModule.forRoot(), RoutesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
