/**
 * Importing npm packages
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  ACCOMPLICE = 'ACCOMPLICE',
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

  @ManyToOne(() => Character, (character) => character.id)
  relatedCharacter: Character;
}

export const CharacterRelationshipDatabaseModule = TypeOrmModule.forFeature([
  CharacterRelationship,
]);
