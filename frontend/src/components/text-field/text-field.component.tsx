/**
 * Importing npm packages
 */

/**
 * Importing user defined components
 */

/**
 *  Importing user defined modules
 */
import { Input } from './text-field.styles';

/**
 * Declaring types
 */

/**
 * Declaring constants and variables
 */

export interface TextFieldProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

/**
 * Functional Component
 */
export function TextField(props: TextFieldProps) {
  return <Input placeholder={props.placeholder} value={props.value} onChange={(e) => props.onChange?.(e.target.value)} />;
}
