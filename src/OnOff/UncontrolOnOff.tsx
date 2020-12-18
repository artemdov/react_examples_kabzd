import React, {useState} from "react";


export type PropsType = {
    onChange: (on: boolean) => void
    defaulOn?: boolean

}

const onStyle = {};


function OnOff(props: PropsType) {



    let [on, setOn] = useState(props.defaulOn ? props.defaulOn : false)


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    };


    return <div>
        <div style={onStyle} onClick={() =>{setOn (true)} }>On</div>
        <div style={offStyle} onClick={ () =>{setOn (false)} }>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff;

