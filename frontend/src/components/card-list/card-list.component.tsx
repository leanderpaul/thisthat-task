/**
 * Importing npm packages
 */

/**
 * Importing user defined components
 */
import { Card } from '@app/components/card';
import { Loader } from '@app/components/loader';

import { Container } from './card-list.styles';

/**
 *  Importing user defined modules
 */

/**
 * Declaring types
 */

export interface CardListProps {
  loading: boolean;
  data: string[];
  onCardClick?: (name: string) => void;
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
        props.data.map((name, index) => (
          <Card
            name={name}
            key={index}
            onClick={() => props.onCardClick?.(name)}
          />
        ))}
    </Container>
  );
}

export default CardList;
