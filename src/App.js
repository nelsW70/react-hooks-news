import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get('http://hn.algolia.com/api/v1/search?query=reacthooks')
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
      });
  }, []);

  return (
    <>
      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
