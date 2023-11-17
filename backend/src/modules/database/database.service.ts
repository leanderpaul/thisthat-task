/**
 * Importing npm packages
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type Repository } from 'typeorm';

/**
 * Importing user defined packages
 */
import { CharacterRelationship } from './entities/character-relationship.entity';
import { Character } from './entities/character.entity';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>,
    @InjectRepository(CharacterRelationship)
    private readonly characterRelationshipRepository: Repository<CharacterRelationship>,
  ) {}

  getCharacterRepository(): Repository<Character> {
    return this.characterRepository;
  }

  getCharacterRelationshipRepository(): Repository<CharacterRelationship> {
    return this.characterRelationshipRepository;
  }
}
