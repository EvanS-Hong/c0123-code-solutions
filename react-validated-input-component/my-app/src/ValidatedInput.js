import {useState} from 'react';

export default function ValidatedInputs() {
  const [passWord, setPassWord] = useState('');

  let text;
  let icon;
  if (passWord === '') {
     text = 'A password is required';
    icon = '\u274C';
  } else if (passWord.length < 8) {
    text = 'Your password is too short';
    icon = '\u274C';
  } else {icon = '\u2705';}


  return (
    <div>
      <form>
        <label>
          password
          <input
          name='passWord'
          type='password'
          value={passWord}
            onChange={e => setPassWord(e.target.value)} /> {icon}
        </label>
      </form>
      <p> {text} </p>
    </div>
  )
}
