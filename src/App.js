import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');

  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className='container'>
      <button
        className='btn'
        disabled={disabled}
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <div>
        <input
          className='checkbox'
          id='disable-button-checkbox'
          type='checkbox'
          onChange={(e) => {
            setDisabled(!disabled ? true : false);
            setButtonColor(disabled ? 'MediumVioletRed' : 'Grey');
          }}
        />
        <label htmlFor='disable-button-checkbox'>Disable button</label>
      </div>
    </div>
  );
}

export default App;
