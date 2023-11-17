/**
 * Importing npm packages
 */

import { Module } from '@nestjs/common';

/**
 * Importing user defined packages
 */
import { CharacterModule } from '@app/modules/character';

import { CharacterRelationshipController } from './character-relationship.controller';
import { CharacterController } from './character.controller';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Module({
  imports: [CharacterModule],
  controllers: [CharacterController, CharacterRelationshipController],
})
export class CharacterRouterModule {}
