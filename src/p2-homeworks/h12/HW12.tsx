import React from 'react';
import s from './HW12.module.css';
import {MenuItem, Select} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC} from '../h10/bll/changeColor-reducer';
import {SelectChangeEvent} from '@mui/material/Select';

const themes = ['dark', 'red', 'some', 'white', 'yellow'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color); // useSelector

    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(changeThemeAC(event.target.value))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <Select size={'small'} variant={'outlined'} value={theme} onChange={handleChange}>
                {themes.map((el, i) => <MenuItem key={i} value={el}>{el}</MenuItem>)}
            </Select>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
