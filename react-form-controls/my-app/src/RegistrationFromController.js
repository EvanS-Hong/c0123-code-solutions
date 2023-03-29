import { useState } from 'react';


export default function RegisterFormC() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  console.log(firstName);
  console.log(lastName);
}

  return (
    <>
    <h1> Controlled form </h1>
    <form onSubmit={handleSubmit}>
      <label>
        FirstName
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        LastName
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button type="submit"> Submit </button>
    </form>
    </>
  )}
