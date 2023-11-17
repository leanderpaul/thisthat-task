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

export class SuccessResponseDto<T> {
  @ApiProperty()
  message: string;

  @ApiProperty()
  data: T;
}
