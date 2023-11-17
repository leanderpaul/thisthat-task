/**
 * Importing npm packages
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export const Input = styled.input`
  color: #212121;
  appearance: none;
  display: block;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  border-radius: 2px;
  text-indent: 12px;
  font-size: 16px;
  outline: none;
  border: none;
  padding-right: 12px;
  transition: all 0.2s ease-in-out;
  background: #f8f8f8;
  border: 1px solid #e4e4e4;

  &::placeholder {
    color: #aab2bb;
    letter-spacing: 0.3px;
    font-weight: 400;
  }
`;
