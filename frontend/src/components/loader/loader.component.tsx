/**
 * Importing npm packages
 */

/**
 * Importing user defined components
 */
import { Spinner, SpinnerContainer } from './loader.styles';

/**
 *  Importing user defined modules
 */

/**
 * Declaring types
 */

export interface LoaderProps {
  height?: string;
  width?: string;
  show?: boolean;
}

/**
 * Declaring constants and variables
 */

/**
 * Functional Component
 */
export function Loader(props: LoaderProps) {
  if (props.show === false) return;

  return (
    <SpinnerContainer width={props.width} height={props.height}>
      <Spinner size={50} />
    </SpinnerContainer>
  );
}

export default Loader;
