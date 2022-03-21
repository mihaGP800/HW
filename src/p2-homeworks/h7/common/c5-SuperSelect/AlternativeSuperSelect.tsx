import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

type BasicSelectType = {
    options: any[]
    value: any
    onChangeOption:(value: any)=>void
}

export const BasicSelect:React.FC<BasicSelectType>=({value,options, onChangeOption})=> {
    // const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        onChangeOption(event.target.value as string);
    };

    return (
        <Box >
            <FormControl fullWidth size={'small'} color={'info'} variant={'outlined'}
            sx={{width: '150px', height: '35px', padding:'2px'}}>
                <InputLabel id="demo-simple-select-label">choose item</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label='choose item'
                    onChange={handleChange}
                >
                    {options.map((el,ind)=><MenuItem key={ind} value={el}>{el}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}
