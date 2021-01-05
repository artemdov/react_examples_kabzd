import React, {useReducer} from "react";
import {reducer} from "./reducer";

function UncontroledAccordion(props:AccordionPropsType) {
     //let [collapsed, setCollapsed] =useState(false)
     let [state, dispatch] =useReducer(reducer, {collapsed: false})     //work as useState but data is in REDUCER

         return <div>
{/*
         <AccordionTitle title={props.titleValue}  onClick={() => { setCollapsed(!collapsed)}} />
*/}
             <AccordionTitle title={props.titleValue} onClick={() => { dispatch({type: 'TOGLE-COLLAPSED'})}} />
             { !state.collapsed && <AccordionBody />}
         </div>
     }

 type AccordionPropsType = {
    titleValue:string
    //collapsed:boolean

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>--{props.title}--</h3>
    )
}


export function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>

    </ul>
}
export default UncontroledAccordion

