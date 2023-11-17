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

export class PageQueryDto {
  @ApiProperty({ required: false, default: 20 })
  limit?: number;

  @ApiProperty({ required: false, default: 0 })
  offset?: number;
}
