/**
 * Importing npm packages
 */
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * Importing user defined packages
 */
import { Character } from './character.entity';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export enum RelationshipType {
  FRIEND = 'FRIEND',
  ENEMY = 'ENEMY',
}

@Entity()
export class CharacterRelationship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('enum', { enum: RelationshipType })
  relationshipType: RelationshipType;

  @ManyToOne(() => Character, (character) => character.relationships)
  character: Character;

  @Column('int')
  relatedCharacterId: number;
}

export const CharacterRelationshipDatabaseModule = TypeOrmModule.forFeature([
  CharacterRelationship,
]);
