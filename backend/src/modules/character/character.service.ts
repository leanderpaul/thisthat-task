/**
 * Importing npm packages
 */
import { Injectable } from '@nestjs/common';
import lodash from 'lodash';
import { FindOptionsWhere, Like } from 'typeorm';

/**
 * Importing user defined packages
 */
import { CreateCharacterDto, UpdateCharacterDto } from '@app/dtos/character';
import { FindCharacterQueryDto } from '@app/dtos/character/find-character-query.dto';
import { type Character, DatabaseService, Gender } from '@app/modules/database';

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

  async getCharactersCount(query: FindCharacterQueryDto): Promise<number> {
    const where: FindOptionsWhere<Character> = {};
    if (query.name) where.name = Like(`%${query.name}%`);
    if (query.gender) where.gender = query.gender;
    if (typeof query.isActive === 'boolean') where.isActive = query.isActive;
    return await this.characterRepository.count({ where });
  }

  async getCharacters(query: FindCharacterQueryDto): Promise<Character[]> {
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

  async getCharacter(id: number): Promise<Character | null> {
    return await this.characterRepository.findOne({ where: { id } });
  }

  async updateCharacter(
    id: number,
    update: UpdateCharacterDto,
  ): Promise<Character | null> {
    const character = await this.getCharacter(id);
    if (!character) return null;
    const updatedVal = await this.characterRepository.save({ id, ...update });
    return lodash.merge(character, updatedVal);
  }

  async deleteCharacter(id: number): Promise<boolean> {
    const res = await this.characterRepository.delete({ id });
    return res.affected === 1;
  }
}
