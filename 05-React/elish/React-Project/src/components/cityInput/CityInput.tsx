import { useState, KeyboardEvent, ReactNode, memo } from 'react';
import { CurrentCondition } from '../../typeApi';
import './CityInput.css';

interface CityInputProps {
  city?: string;
  makeApiCall: (city: string) => Promise<CurrentCondition | null>;
}

function CityInput({city, makeApiCall}: CityInputProps): ReactNode{
    const [inputValue, setInputValue] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('Enter a City...');
    const [loading, setLoading] = useState<boolean>(false);
  
    const onKlickHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
      const eventKey = e.which ? e.which : e.keyCode;
  
      if (eventKey === 13) { // Enter key
        const input = (e.target as HTMLInputElement).value;
       
        if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(input)) {
          setLoading(true);
          const result = await makeApiCall(input);
  
          if (result) {
            setPlaceholder('Enter a City...');
          } else {
            setPlaceholder('City was not found, try again...');
          }
        } else {
          setPlaceholder('Please enter a valid city name...');
        }
  
        setLoading(false);
        setInputValue(''); // Clear input
      }
    };

    const style: React.CSSProperties = {
        top: city ? '-380px' : '-20px',
        width: '600px',
        display: 'inline-block',
        padding: '10px 0px 10px 30px',
        lineHeight: '120%',
        position: 'relative',
        borderRadius: '20px',
        outline: 'none',
        fontSize: '20px',
        transition: 'all 0.5s ease-out',
      };

    return(
        <input
        className={`city-input ${loading ? 'loading' : ''}`}
        style={style}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={onKlickHandler}
      />
    );
}

export default memo(CityInput);
