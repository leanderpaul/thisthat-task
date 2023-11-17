/**
 * Importing npm packages
 */
import { ApiProperty } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */
import { Gender } from '@app/modules/database';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class CharacterDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty({ enum: Gender })
  gender: Gender;

  @ApiProperty()
  isActive: boolean;
}
