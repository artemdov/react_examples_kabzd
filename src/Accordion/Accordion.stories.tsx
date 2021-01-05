import React, {useState} from 'react';
import {ControlAccordion} from "./ControlAccordion";
import {action} from '@storybook/react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1



export default {
    title: 'ControlAccordion',
    component: ControlAccordion,
}

const callback = action('controlaccordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <ControlAccordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}  onClick={onClickCallback}/>
export const UnCollapsedMode = () => <ControlAccordion  titleValue={'Users'} collapsed={false} onChange={callback} items= {[{title:"Tom", value: 1}, {title: "Mike", value:2}, {title:"Nick", value:3}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <ControlAccordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)} items= {[{title:"Tom", value: 1}, {title: "Mike", value:2}, {title:"Nick", value:3}]} onClick={onClickCallback}/>
}



