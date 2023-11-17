/**
 * Importing npm packages
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */
import {
  CharacterDto,
  CreateCharacterDto,
  FindCharacterQueryDto,
  UpdateCharacterDto,
} from '@app/dtos/character';
import { PageResponseDto } from '@app/dtos/pagination/page-response.dto';
import { DeleteResponseDto, SuccessResponseDto } from '@app/dtos/response';
import { CharacterService } from '@app/modules/character/character.service';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@ApiTags('characters')
@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async listCharacters(
    @Query() query: FindCharacterQueryDto,
  ): Promise<PageResponseDto<CharacterDto>> {
    const [characterList, total] = await Promise.all([
      this.characterService.getCharacters(query),
      this.characterService.getCharactersCount(query),
    ]);
    const page = { offset: query.offset, limit: query.limit, total };
    return { message: 'Character List', page, data: characterList };
  }

  @Post()
  async createCharacter(
    @Body() body: CreateCharacterDto,
  ): Promise<SuccessResponseDto<CharacterDto>> {
    const character = await this.characterService.createCharacter(body);
    return { message: 'Character created successfully', data: character };
  }

  @Get(':id')
  async getCharacter(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<SuccessResponseDto<CharacterDto>> {
    const character = await this.characterService.getCharacter(id);
    if (!character) throw new NotFoundException(`Character not found`);
    return { message: 'Character found', data: character };
  }

  @Put(':id')
  async updateCharacter(
    @Body() body: UpdateCharacterDto,
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<SuccessResponseDto<CharacterDto>> {
    const character = await this.characterService.updateCharacter(id, body);
    if (!character) throw new NotFoundException(`Character not found`);
    return { message: 'Character updated successfully', data: character };
  }

  @Delete(':id')
  async deleteCharacter(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<DeleteResponseDto> {
    const isDeleted = await this.characterService.deleteCharacter(id);
    if (!isDeleted) throw new NotFoundException(`Character not found`);
    return { isDeleted, message: 'Character deleted successfully' };
  }
}
