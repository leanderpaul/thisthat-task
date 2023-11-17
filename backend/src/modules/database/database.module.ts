/**
 * Importing npm packages
 */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * Importing user defined packages
 */
import { DatabaseService } from './database.service';
import {
  CharacterRelationship,
  CharacterRelationshipDatabaseModule,
} from './entities/character-relationship.entity';
import {
  Character,
  CharacterDatabaseModule,
} from './entities/character.entity';

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
