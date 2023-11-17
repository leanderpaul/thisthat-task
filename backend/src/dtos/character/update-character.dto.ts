/**
 * Importing npm packages
 */
import { PartialType } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */
import { CreateCharacterDto } from './create-character.dto';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) {}
