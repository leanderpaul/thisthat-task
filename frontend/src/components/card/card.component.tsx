/**
 * Importing npm packages
 */

/**
 * Importing user defined components
 */
import { Container } from './card.styles';

/**
 *  Importing user defined modules
 */

/**
 * Declaring types
 */

export interface CardProps {
  name: string;
  onClick?: () => void;
}

/**
 * Declaring constants and variables
 */

/**
 * Functional Component
 */
export function Card(props: CardProps) {
  return (
    <Container onClick={() => props.onClick?.()}>
      <span>{props.name}</span>
    </Container>
  );
}

export default Card;
