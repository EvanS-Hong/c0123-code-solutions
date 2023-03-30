import {useState} from 'react';

export default function ValidatedInputs() {
  const [passWord, setPassWord] = useState('');
  // const [text, setText] =  useState('');

  let text;
  if (passWord === '') {
     text = 'A password is required';
  } else if (passWord.length < 8) {
    text = 'Your password is too short';
  };


  return (
    <div>
      <form>
        <label>
          password
          <input
          name='passWord'
          type='password'
          value={passWord}
          onChange={e => setPassWord(e.target.value)}/>
        </label>
      </form>
      <p> {text} </p>
    </div>

  )
}
