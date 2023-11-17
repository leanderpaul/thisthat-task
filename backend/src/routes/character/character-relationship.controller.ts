/**
 * Importing npm packages
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */

import {
  AddCharacterRelationDto,
  CharacterRelationDto,
  UpdateCharacterRelationDto,
} from '@app/dtos/character';
import { DeleteResponseDto, SuccessResponseDto } from '@app/dtos/response';
import { CharacterRelationService } from '@app/modules/character';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@ApiTags('Character Relationships')
@Controller('character/:characterId/relationships')
export class CharacterRelationshipController {
  constructor(
    private readonly characterRelationService: CharacterRelationService,
  ) {}

  @Get()
  async getCharacterRelations(
    @Param('characterId') characterId: number,
  ): Promise<SuccessResponseDto<CharacterRelationDto[]>> {
    const data =
      await this.characterRelationService.getCharacterRelations(characterId);
    return { message: 'Character relation list', data };
  }

  @Post()
  async addCharacterRelation(
    @Param('characterId') characterId: number,
    @Body() body: AddCharacterRelationDto,
  ): Promise<SuccessResponseDto<CharacterRelationDto>> {
    const relation = await this.characterRelationService.addCharacterRelation(
      characterId,
      body,
    );
    return { message: 'Character relation added', data: relation };
  }

  @Put(':relatedCharacterId')
  async updateCharacterRelation(
    @Param('characterId') characterId: number,
    @Param('relatedCharacterId') relatedCharacterId: number,
    @Body() body: UpdateCharacterRelationDto,
  ): Promise<SuccessResponseDto<CharacterRelationDto>> {
    const relation =
      await this.characterRelationService.updateCharacterRelation(
        characterId,
        relatedCharacterId,
        body.relationshipType,
      );
    return { message: 'Character relation updated', data: relation };
  }

  @Delete(':relatedCharacterId')
  async deleteCharacterRelation(
    @Param('characterId') characterId: number,
    @Param('relatedCharacterId') relatedCharacterId: number,
  ): Promise<DeleteResponseDto> {
    const isDeleted =
      await this.characterRelationService.removeCharacterRelation(
        characterId,
        relatedCharacterId,
      );
    return { message: 'Character relation deleted', isDeleted };
  }
}
