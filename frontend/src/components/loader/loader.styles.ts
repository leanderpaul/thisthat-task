/**
 * Importing npm packages
 */
import styled from 'styled-components';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

export interface SpinnerProps {
  size: number;
}

export interface SpinnerContainerProps {
  width?: string;
  height?: string;
}

/**
 * Declaring the constants
 */

export const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '100%'};
`;
