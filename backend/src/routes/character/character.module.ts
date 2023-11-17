/**
 * Importing npm packages
 */

import { Module } from '@nestjs/common';

/**
 * Importing user defined packages
 */
import { CharacterModule } from '@app/modules/character';

import { CharacterController } from './character.controller';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Module({
  imports: [CharacterModule],
  controllers: [CharacterController],
})
export class CharacterRouterModule {}
