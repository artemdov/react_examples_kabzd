import React, {useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';


export default {
  title: 'input',
 // component: OnOff
}

export const ControledInput = () => <input value={"it-incubator.by"}/>

export const UncontroledInput = () => <input/>

export const TrackValueOfUncontroledInput = () => {
  const [value, setValue] = useState("")
 return <><input onChange={(e) =>{const actualValue = e.currentTarget.value
 setValue(actualValue)
 }}/> -{value}-  </>
}

export const GetValueOfUncontroledInputByButtonPress = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef} id={"inputId"}/>
    <button onClick={save}>save</button> :actual value{value} </>

}





