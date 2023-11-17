/**
 * Importing npm packages
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Importing user defined packages
 */
import { CharacterRelationship } from './character-relationship.entity';

/**
 * Defining types
 */

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

/**
 * Declaring the constants
 */

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('enum', { enum: Gender })
  gender: Gender;

  @Column('int')
  age: number;

  @Column('boolean', { default: true })
  isActive: boolean;

  @OneToMany(
    () => CharacterRelationship,
    (characterRelationship) => characterRelationship.character,
  )
  relationships: CharacterRelationship[];
}

export const CharacterDatabaseModule = TypeOrmModule.forFeature([Character]);
