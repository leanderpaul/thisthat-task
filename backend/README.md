# ThisThat Backend NestJS application

## Environment variable required

- `DATABASE` - The postgres database URL

## Installation

```bash
$ npm install
```

## Running the app

The command below will run the application in development mode and watch for file changes.

```bash
# development
$ npm run dev
```

## Utility scripts

```bash
# lint code and fix
$ npm run lint:fix
```

## ERD Diagram

![ERD Diagram](../docs/ERD-Diagram.png 'a title')

There are two tables in the proposed schema - `Character` and `CharacterRelationship`

The code to create the sql tables are as follows:

```sql
CREATE TYPE character_gender_enum AS ENUM('MALE', 'FEMALE', 'OTHER');
CREATE TYPE character_relationship_relationshiptype_enum AS ENUM('ACCOMPLICE', 'ENEMY');

CREATE TABLE IF NOT EXISTS Character (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  gender character_gender_enum NOT NULL,
  age INT NOT NULL,
  isActive BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS CharacterRelationship (
  id serial PRIMARY KEY,
  characterId INT NOT NULL,
  relatedCharacterId INT NOT NULL
  relationshipType character_relationship_relationshiptype_enum NOT NULL,
  CONSTRAINT characterIdFK FOREIGN KEY(characterId) REFERENCES Character(id),
  CONSTRAINT relatedCharacterIdFK FOREIGN KEY(relatedCharacterId) REFERENCES Character(id),
)
```

## API routes and documentation

The API routes and the documentation for the api can be accessed after running the application and visting `/docs`

The APIs follow the below pattern

`/characters/:characterId/relationships/:relatedCharacterId`

## Comments

- Faced a challenge when deciding the schema for the relationship table since it is commonly known that when `A` is a friend of `B` the same is true vice versa. But then decided to move with the idea that when `A` is a friend of `B` it does not mean `B` is a friend of `A`. This made it easier to create the relationship table.
