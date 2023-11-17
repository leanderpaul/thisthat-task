/**
 * Importing npm packages
 */

import { ApiProperty } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class DeleteResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  isDeleted: boolean;
}
