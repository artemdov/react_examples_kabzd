import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Select} from "./select";



export default {
    title: 'Select',
    component: Select,
}




export const WithValue = () =>{
    const[value, setValue] = useState('1')
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1',title: "Minsk",},
                    {value: '2',title: "Kiev"},
                    {value: '3',title: "Moscow"}
                    ]}/>
    </>
    }

export const WithoutValue = () => {
    const[value, setValue] = useState('null')
    return <>
        <Select
            onChange={setValue}
            value={null}
            items={[
                {value: '1', title: "Minsk",},
                {value: '2', title: "Kiev"},
                {value: '3', title: "Moscow"}
            ]}/>


    </>
}


