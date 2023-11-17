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

interface State {
  data: string[];
  loading: boolean;
}

interface MarvelCharacterListResponse {
  data: {
    results: { name: string }[];
  };
}

export interface MarvelCharacterList extends State {
  fetch(name: string): Promise<void>;
  clear(): void;
}

/**
 * Declaring the constants
 */
const apikey = import.meta.env.VITE_MARVEL_API_KEY;
const marvelBaseUrl = 'https://gateway.marvel.com:443/v1/public';
if (!apikey) throw new Error('REACT_APP_MARVEL_API_KEY is not defined');

export function useMarvelCharacterList(): MarvelCharacterList {
  const [state, setState] = useState<State>({ data: [], loading: false });

  const clear = () => setState({ data: [], loading: false });

  async function fetchCharacters(name: string) {
    setState({ ...state, loading: true });

    const searchParams = new URLSearchParams({ apikey });
    searchParams.append('limit', '10');
    searchParams.append('orderBy', 'name');
    searchParams.append('nameStartsWith', name);
    const params = searchParams.toString();
    const response = await fetch(`${marvelBaseUrl}/characters?${params}`);
    const json: MarvelCharacterListResponse = await response.json();
    const characterList = json.data.results.map((character) => character.name);

    setState({ data: characterList, loading: false });
  }

  return { fetch: fetchCharacters, clear, ...state };
}
