/**
 * Importing npm packages
 */
import { Module } from '@nestjs/common';

/**
 * Importing user defined packages
 */
import { CharacterRouterModule } from './character';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Module({
  imports: [CharacterRouterModule],
})
export class RoutesModule {}
