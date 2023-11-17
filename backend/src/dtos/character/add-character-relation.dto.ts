/**
 * Importing npm packages
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt } from 'class-validator';

import { RelationshipType } from '@app/modules/database';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class AddCharacterRelationDto {
  @ApiProperty({ enum: RelationshipType })
  @IsEnum(RelationshipType)
  relationshipType: RelationshipType;

  @ApiProperty()
  @IsInt()
  characterId: number;
}
