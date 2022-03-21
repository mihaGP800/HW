import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {BasicSelect} from "./common/c5-SuperSelect/AlternativeSuperSelect";
import AlternativeSuperRadio from "./common/c6-SuperRadio/AlternativeSuperRadio";

const arr = [,'x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    // onChangeOption={onChangeOption}
                    onChange={(e) => onChangeOption(e.currentTarget.value)}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    // onChangeOption={onChangeOption}
                    onChange={(e) => onChangeOption(e.currentTarget.value)}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <BasicSelect options={arr}
                         value={value}
                         onChangeOption={onChangeOption}/>
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
