import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import UncontrolOnOff from "./UncontrolOnOff";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";


export default {
    title: 'UncontrolOnOff',
    component: UncontrolOnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolOnOff defaulOn={true} onChange={callback} />
export const OffMode = () => <UncontrolOnOff defaulOn={false} onChange={callback} />





