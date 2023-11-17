/**
 * Importing npm packages
 */
import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Like } from 'typeorm';
import lodash from 'lodash';

/**
 * Importing user defined packages
 */
import { DatabaseService, type Character, Gender } from '@app/modules/database';
import { CreateCharacterDto } from '@app/dtos/character';
import { FindCharacterQueryDto } from '@app/dtos/character/find-character-query.dto';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Injectable()
export class CharacterService {
  private readonly characterRepository;
  private readonly characterRelationshipRepository;

  constructor(databaseService: DatabaseService) {
    this.characterRepository = databaseService.getCharacterRepository();
    this.characterRelationshipRepository =
      databaseService.getCharacterRelationshipRepository();
  }

  async createCharacter(character: CreateCharacterDto): Promise<Character> {
    return await this.characterRepository.save(character);
  }

  async getCharacters(query: FindCharacterQueryDto): Promise<Character[]> {
    query = lodash.defaults(query, { offset: 0, limit: 20 });
    const where: FindOptionsWhere<Character> = {};
    if (query.name) where.name = Like(`%${query.name}%`);
    if (query.gender) where.gender = query.gender;
    if (typeof query.isActive === 'boolean') where.isActive = query.isActive;
    return await this.characterRepository.find({
      where,
      skip: query.offset,
      take: query.limit,
    });
  }
}
