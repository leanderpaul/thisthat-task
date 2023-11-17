/**
 * Importing npm packages
 */
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

/**
 * Importing user defined packages
 */
import { CreateCharacterDto } from '@app/dtos/character';
import { CharacterService } from '@app/modules/character/character.service';
import { FindCharacterQueryDto } from '@app/dtos/character/find-character-query.dto';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  listCharacters(@Query() query: FindCharacterQueryDto) {
    return this.characterService.getCharacters(query);
  }

  @Post()
  createCharacter(@Body() character: CreateCharacterDto) {
    return this.characterService.createCharacter(character);
  }
}
