import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {UncontroledRating} from "./UncontroledRating";
import {callbackify} from "util";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontroledRating',
    component: UncontroledRating,

}

const callback = action('rating change inside component')

export const RatingEmpty = () => <UncontroledRating defaultValue={0} onChange={callback} />
export const Rating1 = () => <UncontroledRating defaultValue={1}  onChange={callback}/>
export const Rating2 = () => <UncontroledRating defaultValue={2} onChange={callback} />
export const Rating3 = () => <UncontroledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontroledRating defaultValue={4} onChange={callback} />
export const Rating5 = () => <UncontroledRating defaultValue={4} onChange={callback} />



