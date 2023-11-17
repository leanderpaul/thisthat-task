/**
 * Importing npm packages
 */
import { useState } from 'react';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

interface MarvelCharacterListResponse {
  data: {
    results: { name: string }[];
  };
}

export interface MarvelCharacterList {
  data: string[];
  loading: boolean;
}

/**
 * Declaring the constants
 */

const apikey = import.meta.env.VITE_MARVEL_API_KEY;
const marvelBaseUrl = 'https://gateway.marvel.com:443/v1/public';
if (!apikey) throw new Error('REACT_APP_MARVEL_API_KEY is not defined');

// export interface MarvelCharacterListHookProps {}

export function useMarvelCharacterList(): [(name: string) => Promise<void>, MarvelCharacterList] {
  const [state, setState] = useState<MarvelCharacterList>({ data: [], loading: false });

  async function fetchCharacters(name: string) {
    setState({ ...state, loading: true });

    const searchParams = new URLSearchParams({ apikey, orderBy: 'name', limit: '10' });
    searchParams.append('nameStartsWith', name);
    const params = searchParams.toString();
    const response = await fetch(`${marvelBaseUrl}/characters?${params}`);
    const json: MarvelCharacterListResponse = await response.json();
    const characterList = json.data.results.map((character) => character.name);

    setState({ data: characterList, loading: false });
  }

  return [fetchCharacters, state];
}
