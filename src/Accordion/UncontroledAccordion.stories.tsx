import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import UncontroledAccordion from "./UncontroledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontroledAccordion',
    component: UncontroledAccordion,
}

const callback = action('uncontroledaccordion mode change event fired')



export const ModeChanging = () => {

    return <UncontroledAccordion titleValue={'Users'} />
}



