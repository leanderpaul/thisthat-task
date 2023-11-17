/**
 * Importing npm packages
 */
import { ApiProperty } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */
import { RelationshipType } from '@app/modules/database';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class CharacterRelationDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: RelationshipType })
  relationshipType: RelationshipType;

  @ApiProperty()
  name: string;
}
