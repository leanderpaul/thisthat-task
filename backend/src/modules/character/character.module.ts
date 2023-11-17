/**
 * Importing npm packages
 */

import { Module } from '@nestjs/common';

/**
 * Importing user defined packages
 */
import { DatabaseModule } from '@app/modules/database';

import { CharacterRelationService } from './character-relation.service';
import { CharacterService } from './character.service';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Module({
  imports: [DatabaseModule],
  providers: [CharacterService, CharacterRelationService],
  exports: [CharacterService, CharacterRelationService],
})
export class CharacterModule {}
