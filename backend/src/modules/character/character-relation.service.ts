/**
 * Importing npm packages
 */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

/**
 * Importing user defined packages
 */
import {
  AddCharacterRelationDto,
  CharacterRelationDto,
} from '@app/dtos/character';
import {
  Character,
  CharacterRelationship,
  DatabaseService,
  RelationshipType,
} from '@app/modules/database';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Injectable()
export class CharacterRelationService {
  private readonly characterRepository;
  private readonly characterRelationshipRepository;

  constructor(databaseService: DatabaseService) {
    this.characterRepository = databaseService.getCharacterRepository();
    this.characterRelationshipRepository =
      databaseService.getCharacterRelationshipRepository();
  }

  private async verifyCharacters(
    characterId: number,
    relatedCharacterId: number,
  ): Promise<{ character: Character; relatedCharacter: Character }> {
    const repo = this.characterRepository;
    const character = await repo.findOne({ where: { id: characterId } });
    if (!character) throw new NotFoundException('Character not found');

    const relatedCharacter = await repo.findOne({
      where: { id: relatedCharacterId },
    });
    if (!relatedCharacter) {
      throw new NotFoundException('Related character not found');
    }

    return { character, relatedCharacter };
  }

  private getRelatedCharacter(
    relation: CharacterRelationship,
  ): CharacterRelationDto {
    const { id, name } = relation.relatedCharacter;
    return { id, name, relationshipType: relation.relationshipType };
  }

  async getCharacterRelations(id: number): Promise<CharacterRelationDto[]> {
    const character = await this.characterRepository.findOne({ where: { id } });
    if (!character) throw new NotFoundException('Character not found');

    const result = await this.characterRelationshipRepository.find({
      where: { character: { id } },
      relations: ['character', 'relatedCharacter'],
      select: {
        relationshipType: true,
        relatedCharacter: { id: true, name: true },
      },
    });
    return result.map(this.getRelatedCharacter);
  }

  async addCharacterRelation(
    characterId: number,
    relation: AddCharacterRelationDto,
  ): Promise<CharacterRelationDto> {
    const { character, relatedCharacter } = await this.verifyCharacters(
      characterId,
      relation.characterId,
    );
    const existingRelation = await this.characterRelationshipRepository.findOne(
      { where: { character: character, relatedCharacter: relatedCharacter } },
    );
    if (existingRelation) {
      throw new ConflictException('Relation already exists');
    }

    const result = await this.characterRelationshipRepository.save({
      relationshipType: relation.relationshipType,
      character,
      relatedCharacter,
    });
    return this.getRelatedCharacter(result);
  }

  async updateCharacterRelation(
    characterId: number,
    relatedCharacterId: number,
    relation: RelationshipType,
  ): Promise<CharacterRelationDto> {
    const { character, relatedCharacter } = await this.verifyCharacters(
      characterId,
      relatedCharacterId,
    );
    const existingRelation = await this.characterRelationshipRepository.findOne(
      { where: { character: character, relatedCharacter: relatedCharacter } },
    );
    if (!existingRelation) {
      throw new ConflictException('Relation does not exist');
    }

    existingRelation.relationshipType = relation;
    await this.characterRelationshipRepository.save(existingRelation);
    return {
      id: relatedCharacterId,
      name: relatedCharacter.name,
      relationshipType: relation,
    };
  }

  async removeCharacterRelation(
    characterId: number,
    relatedCharacterId: number,
  ): Promise<boolean> {
    const { character, relatedCharacter } = await this.verifyCharacters(
      characterId,
      relatedCharacterId,
    );
    const result = await this.characterRelationshipRepository.delete({
      character,
      relatedCharacter,
    });
    return result.affected === 1;
  }
}
