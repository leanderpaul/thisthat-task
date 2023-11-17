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

/**
 * Declaring the constants
 */

export const Container = styled.div`
  display: flex;
  border: 1px solid #e5e5e5;
  margin: 10px 0px;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  height: 125px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  flex-shrink: 0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  & > h4 {
    font-size: 16px;
    margin: 0px;
  }

  & > p {
    overflow: hidden;
    font-size: 14px;
    word-wrap: break-word;
    color: #666;
    margin-top: 10px;
    margin-bottom: 0px;
    line-height: 1.35;
  }
`;
