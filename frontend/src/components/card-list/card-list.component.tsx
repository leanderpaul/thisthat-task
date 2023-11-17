/**
 * Importing npm packages
 */

/**
 * Importing user defined components
 */
import { Card } from '@app/components/card';
import { Loader } from '@app/components/loader';

import { Container } from './card-list.styles';
import { MarvelCharacter } from '@app/types';

/**
 *  Importing user defined modules
 */

/**
 * Declaring types
 */

export interface CardListProps {
  loading: boolean;
  characterList: MarvelCharacter[];
  onCardClick?: (name: MarvelCharacter) => void;
}

/**
 * Declaring constants and variables
 */

/**
 * Functional Component
 */
export function CardList(props: CardListProps) {
  return (
    <Container>
      <Loader show={props.loading} height="200px" />
      {!props.loading &&
        props.characterList.map((character, index) => (
          <Card
            character={character}
            key={index}
            onClick={() => props.onCardClick?.(character)}
          />
        ))}
    </Container>
  );
}

export default CardList;
