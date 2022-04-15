import {Slider} from '@mui/material';
import React from 'react'
import SuperRange from '../c7-SuperRange/SuperRange';

type SuperDoubleRangePropsType = {
    setValue: (value: number[]) => void
    valueDouble: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue, valueDouble,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    function valuetext(value: number) {
        return `${value}°C`;
    }


    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={valueDouble}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </>
    )
}

export default SuperDoubleRange
