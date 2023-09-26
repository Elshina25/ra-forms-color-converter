import React, { useState } from 'react';
import { isValidHex, hexToRgb } from '../utils';
import '../App.css';

export const Hex2rgb = () => {
    const [hexValue, setHexValue] = useState('#');
    const [rgbValue, setRgbValue] = useState('rgb');
    const [wrapperValue, setWrapperValue] = useState('#C0C0C0');

    const handlerColorChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setHexValue(value);

        if (value.length >= 7 && !isValidHex(value)) {
            setRgbValue(hexToRgb(value));
            setWrapperValue('#FF0000');
        } else if (value.length === 7 && isValidHex(value)) {
            setRgbValue(hexToRgb(value));
            setWrapperValue(value);
        } else {
            setRgbValue('rgb');
            setWrapperValue('#C0C0C0');
        }
    }



    return (
        <div className="wrapper" style={{backgroundColor: `${wrapperValue}`}}>
            <input className="hex-input" type="text" value={hexValue} onChange={handlerColorChange}/>
            <div className="rgb">{rgbValue}</div>
        </div>
    )

}