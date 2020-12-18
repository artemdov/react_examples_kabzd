import React, {useState} from "react";

export  type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:() => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function ControlAccordion(props:AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue}  onChange = {props.onChange} />
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

}

type ItemType = {
    title: string
    value: any
}

type AccordionTitlePropsType = {
    title: string
    onChange:() => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title} </h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType ) {
    return <ul>
        {props.items.map( (i,index) => <li onClick={(e) =>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}

