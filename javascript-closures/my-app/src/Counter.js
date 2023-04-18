import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const foo = useCallback(function getData() {
    // fetch data
    return { foo: 'bar' };
  },[]);

  useEffect(() => {
    foo();
    setCounter((prev) => prev + 1);
  }, [foo]);


  return <div>Fetching {counter} times</div>;
}
