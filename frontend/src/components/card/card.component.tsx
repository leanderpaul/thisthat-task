/**
 * Importing npm packages
 */

/**
 * Importing user defined components
 */
import { MarvelCharacter } from '@app/types';

import { Container, ImageContainer, ContentContainer } from './card.styles';

/**
 *  Importing user defined modules
 */

/**
 * Declaring types
 */

export interface CardProps {
  character: MarvelCharacter;
  onClick?: () => void;
}

/**
 * Declaring constants and variables
 */

/**
 * Functional Component
 */
export function Card(props: CardProps) {
  const thumbnail = `${props.character.thumbnail.path}.${props.character.thumbnail.extension}`;

  return (
    <Container onClick={() => props.onClick?.()}>
      <ImageContainer>
        <img src={thumbnail} alt={props.character.name} width="100%" />
      </ImageContainer>
      <ContentContainer>
        <h4>{props.character.name}</h4>
        <p className="desc">
          {props.character.description || <i>No description available</i>}
        </p>
      </ContentContainer>
    </Container>
  );
}

export default Card;
