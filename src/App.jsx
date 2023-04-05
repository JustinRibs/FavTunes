import React, { useState } from 'react';
import axios from 'axios';
export default function App() {
  const [num, setNum] = useState();
  const axycally = () => {
    axios.get(`/user/${num}`).then(res => console.log(res));
  };
  return (
    <>
      <h1>yo</h1>
      <input onChange={e => setNum(e.target.value)} />
      <button onClick={axycally}>Axios call</button>
    </>
  );
}
