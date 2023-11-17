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

class PageInfoSto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}

export class PageResponseDto<T> {
  @ApiProperty()
  message: string;

  @ApiProperty()
  data: T[];

  @ApiProperty()
  page: PageInfoSto;
}
