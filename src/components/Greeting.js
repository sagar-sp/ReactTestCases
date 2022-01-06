import { useState } from 'react';
import Output from './Output';
const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>hello World</h2>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button className='btn btn-primary' onClick={changeTextHandler}>
        Change Text!
      </button>
    </div>
  );
};
export default Greeting;
