/**
 * Importing npm packages
 */
import { useState, useEffect } from 'react';

/**
 * Importing user defined components
 */
import { TextField } from './components/text-field';

/**
 *  Importing user defined modules
 */
import { useMarvelCharacterList } from '@app/hooks';
import { CardList } from './components/card-list';

/**
 * Declaring types
 */

/**
 * Declaring constants and variables
 */

/**
 * Functional Component
 */

function App() {
  const [value, setValue] = useState('');
  const { data, loading, fetch, clear } = useMarvelCharacterList();

  function showAlert(name: string) {
    alert(`You have selected '${name}'`);
    setValue('');
  }

  useEffect(() => {
    if (value.length > 1) fetch(value);
    else clear();
  }, [value]);

  return (
    <>
      <div className="background-image"></div>
      <div className="container">
        <div>
          <span className="title">Marvel</span>
        </div>
        <TextField
          placeholder="Enter marvel character name"
          value={value}
          onChange={setValue}
        />
        <CardList
          data={data}
          loading={loading && data.length === 0}
          onCardClick={showAlert}
        />
      </div>
    </>
  );
}

export default App;
