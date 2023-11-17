/**
 * Importing npm packages
 */
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */
import { Gender } from '@app/modules/database';

import { PageQueryDto } from '../pagination/page-query.dto';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class FindCharacterQueryDto extends PageQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false, enum: Gender })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
