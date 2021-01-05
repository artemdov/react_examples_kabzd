
import React, {useState} from "react";
import set = Reflect.set;

export default {
    title: 'React.memo.demo'
}
const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users:Array<string>}) => {
    return<div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)


export const Examlpe1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Valera", "Sasha"])

    const addUser = () => {
        users.push('Sveta' )
        setUsers(users)
    }
return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
    <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
               </>
}
