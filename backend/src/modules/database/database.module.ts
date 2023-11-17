/**
 * Importing npm packages
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * Importing user defined packages
 */
import { DatabaseService } from './database.service';
import {
  CharacterDatabaseModule,
  Character,
} from './entities/character.entity';
import {
  CharacterRelationshipDatabaseModule,
  CharacterRelationship,
} from './entities/character-relationship.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

const PostgresModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get<string>('DATABASE'),
    entities: [Character, CharacterRelationship],
    synchronize: true,
  }),
});

@Module({
  imports: [
    PostgresModule,
    CharacterDatabaseModule,
    CharacterRelationshipDatabaseModule,
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
