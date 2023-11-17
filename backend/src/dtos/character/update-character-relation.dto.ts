/**
 * Importing npm packages
 */

import { PickType } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */
import { AddCharacterRelationDto } from './add-character-relation.dto';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class UpdateCharacterRelationDto extends PickType(
  AddCharacterRelationDto,
  ['relationshipType'] as const,
) {}
